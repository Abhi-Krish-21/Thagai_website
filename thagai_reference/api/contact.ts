import { Resend } from "resend";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { z } from "zod";

const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address").optional().or(z.literal("")),
    phoneNumber: z.string().min(10, "Phone number must be 10 digits").max(10, "Phone number must be 10 digits"),
    message: z.string().optional(),
});

export default async function handler(req: any, res: any) {
    console.log(`[API] Start handling ${req.method} for ${req.body?.name}`);

    // Safety: Ensure we always send a response
    let responded = false;
    const sendResponse = (status: number, data: any) => {
        if (!responded) {
            responded = true;
            res.status(status).json(data);
        }
    };

    try {
        if (req.method !== "POST") {
            return sendResponse(405, { message: "Method not allowed" });
        }

        const body = req.body;
        const validatedData = contactFormSchema.safeParse(body);

        if (!validatedData.success) {
            console.warn("[API] Validation failed", validatedData.error.flatten().fieldErrors);
            return sendResponse(400, {
                message: "Validation failed",
                errors: validatedData.error.flatten().fieldErrors
            });
        }

        const { name, email, phoneNumber, message } = validatedData.data;
        const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
        const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID || "";
        const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || "";
        const GOOGLE_PRIVATE_KEY = (process.env.GOOGLE_PRIVATE_KEY || "")
            .replace(/^"/, "")
            .replace(/"$/, "")
            .replace(/\\n/g, "\n");

        let sheetResult = { success: false, error: null as string | null };
        let emailResult = { success: false, errors: [] as string[] };

        // 1. Google Sheets - Non-blocking
        try {
            console.log("[API] Connecting to Google Sheets...");
            const auth = new JWT({
                email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
                key: GOOGLE_PRIVATE_KEY,
                scopes: ["https://www.googleapis.com/auth/spreadsheets"],
            });

            const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, auth);
            await doc.loadInfo();
            const sheet = doc.sheetsByTitle["Leads"] || doc.sheetsByIndex[0];

            if (sheet) {
                try {
                    await sheet.loadHeaderRow();
                } catch (e) {
                    await sheet.setHeaderRow(["Timestamp", "Name", "Email", "Phone", "Message", "Status"]);
                }

                await sheet.addRow({
                    Timestamp: new Date().toLocaleString(),
                    Name: name,
                    Email: email || "N/A",
                    Phone: phoneNumber,
                    Message: message || "",
                    Status: "New"
                });
                sheetResult.success = true;
                console.log("[API] Google Sheets log success");
            }
        } catch (e: any) {
            console.error("[API] Google Sheets Error:", e.message);
            sheetResult.error = e.message;
        }

        // 2. Resend - Suppress trial errors from UI
        if (email && email.trim() !== "" && email.includes("@")) {
            try {
                console.log("[API] Attempting to send emails via Resend...");
                const resend = new Resend(RESEND_API_KEY);
                const fromEmail = "Thagai <onboarding@resend.dev>";

                // Receipt to user
                const { error: userError } = await resend.emails.send({
                    from: fromEmail,
                    to: email,
                    subject: "We've received your inquiry - Thagai",
                    text: `Dear ${name},\n\nThank you for reaching out to Thagai. We have received your inquiry and our team will contact you shortly.\n\nBest regards,\nThe Thagai Team`,
                });

                if (userError) {
                    console.error("[API] User receipt error:", userError.message);
                    emailResult.errors.push(`User Receipt: ${userError.message}`);
                }

                // Notification to team (likely to fail in trial mode)
                const { error: teamError } = await resend.emails.send({
                    from: fromEmail,
                    to: "hello.thagai@gmail.com",
                    subject: `New Inquiry from ${name}`,
                    text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message || "N/A"}`,
                });

                if (teamError) {
                    console.error("[API] Team notification error (Trial restriction likely):", teamError.message);
                    // We log this but DON'T add it to errorsLine that affects UI status if it's just a domain restriction
                    if (!teamError.message.includes("restriction") && !teamError.message.includes("verify")) {
                        emailResult.errors.push(`Team Alert: ${teamError.message}`);
                    }
                }

                emailResult.success = true; // Still treat as flow success for the UI
            } catch (e: any) {
                console.error("[API] Resend Fatal Error:", e.message);
                // Log but don't block
            }
        } else {
            console.log("[API] No valid email provided. Skipping mail sending.");
            emailResult.success = true;
        }

        // Final Response - Priority is Google Sheets
        if (sheetResult.success) {
            console.log("[API] Lead captured in Sheets. Returning 200 to UI.");
            return sendResponse(200, { message: "Inquiry submitted successfully!" });
        } else {
            console.error("[API] Google Sheets failed. Returning 500.");
            return sendResponse(500, {
                message: "We couldn't process your request right now. Please call us instead.",
                error: sheetResult.error
            });
        }

    } catch (e: any) {
        console.error("[API] CRITICAL HANDLER ERROR:", e);
        return sendResponse(500, { message: "Internal Server Error", error: e.message });
    }
}
