import { Resend } from "resend";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { z } from "zod";

// Validation Schema (shared with frontend)
const contactFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z.string().min(10, "Phone number must be 10 digits").max(10, "Phone number must be 10 digits"),
    message: z.string().optional(),
});

/**
 * Professional Backend Handler for Contact Form
 * This can be deployed as a Vercel/Netlify function or a standalone Express route.
 */
export default async function handler(req: any, res: any) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const RESEND_API_KEY = process.env.RESEND_API_KEY || "";
    console.log(`[API] Resend API Key loaded: ${RESEND_API_KEY ? RESEND_API_KEY.substring(0, 5) + "..." : "MISSING"}`);
    const GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID || "";
    const GOOGLE_SERVICE_ACCOUNT_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || "";
    const GOOGLE_PRIVATE_KEY = (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n");

    try {
        const body = req.body;

        // 1. Validate Input
        const validatedData = contactFormSchema.safeParse(body);
        if (!validatedData.success) {
            return res.status(400).json({
                message: "Validation failed",
                errors: validatedData.error.flatten().fieldErrors
            });
        }

        const { name, email, phoneNumber, message } = validatedData.data;
        const resend = new Resend(RESEND_API_KEY);

        let sheetSuccess = false;
        let emailSuccess = false;
        let errors = [];

        // 2. Data Persistence: Google Sheets
        try {
            const auth = new JWT({
                email: GOOGLE_SERVICE_ACCOUNT_EMAIL,
                key: GOOGLE_PRIVATE_KEY,
                scopes: ["https://www.googleapis.com/auth/spreadsheets"],
            });

            const doc = new GoogleSpreadsheet(GOOGLE_SHEET_ID, auth);
            await doc.loadInfo();
            const sheet = doc.sheetsByTitle["Leads"] || doc.sheetsByIndex[0];

            // Ensure headers exist
            try {
                await sheet.loadHeaderRow();
            } catch (e) {
                // If it fails, the sheet is likely empty, so we set headers
                await sheet.setHeaderRow(["Timestamp", "Name", "Email", "Phone", "Message", "Status"]);
            }

            await sheet.addRow({
                Timestamp: new Date().toLocaleString(),
                Name: name,
                Email: email,
                Phone: phoneNumber,
                Message: message || "",
                Status: "New"
            });
            sheetSuccess = true;
        } catch (e) {
            console.error("Google Sheets Error:", e);
            errors.push("Failed to log data to Google Sheets");
        }

        // 3. Email Automation: Resend
        try {
            console.log("[API] Attempting to send emails via Resend...");
            // Tip: Until you verify your domain, Resend only allows sending FROM 'onboarding@resend.dev'
            // and TO your own account email.
            const fromEmail = "Thagai <onboarding@resend.dev>";

            // Thank you email to user
            console.log(`[API] Sending personal thank you to: ${email}...`);
            const { data: userData, error: userError } = await resend.emails.send({
                from: fromEmail,
                to: email,
                subject: "We've received your inquiry - Thagai",
                text: `Dear ${name},\n\nThank you for reaching out to Thagai. We have received your inquiry and our team will contact you shortly.\n\nBest regards,\nThe Thagai Team`,
            });

            if (userError) {
                console.error("[API] Resend user error details:", userError);
                errors.push(`User Email: ${userError.message}`);
            } else {
                console.log("[API] Resend user success:", userData?.id);
            }

            // Notification to team
            console.log("[API] Sending team notification...");
            const { data: teamData, error: teamError } = await resend.emails.send({
                from: fromEmail,
                to: "hello.thagai@gmail.com",
                subject: `New Inquiry from ${name}`,
                text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message || "N/A"}`,
            });

            if (teamError) {
                console.error("[API] Resend team error:", JSON.stringify(teamError));
                errors.push(`Team Notification: ${teamError.message}`);
            } else {
                console.log("[API] Resend team success:", teamData?.id);
            }

            if (!userError && !teamError) {
                console.log("[API] Email block completed successfully");
                emailSuccess = true;
            } else {
                console.warn("[API] Email block completed with partial errors");
                // If at least one email sent, we can mark it as partial success
                // but for now let's be strict if both are needed
                emailSuccess = !userError || !teamError;
            }
        } catch (e: any) {
            console.error("[API] Resend Unexpected Error:", e.message);
            errors.push(`Email Block Failed: ${e.message}`);
        }

        // 4. Return Final Status
        if (sheetSuccess && emailSuccess) {
            return res.status(200).json({ message: "Inquiry submitted successfully!" });
        } else if (sheetSuccess || emailSuccess) {
            return res.status(207).json({
                message: "Inquiry partially processed.",
                warnings: errors
            });
        } else {
            return res.status(500).json({ message: "Failed to process inquiry.", errors });
        }

    } catch (error) {
        console.error("Internal Server Error:", error);
        return res.status(500).json({ message: "An unexpected error occurred." });
    }
}
