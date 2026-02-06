import type { APIRoute } from "astro";
import { Resend } from "resend";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { z } from "zod";

export const prerender = false;

// Validation Schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phoneNumber: z.string().min(10, "Phone number must be 10 digits").max(10, "Phone number must be 10 digits"),
  message: z.string().optional(),
});

export const POST: APIRoute = async ({ request }) => {
  const RESEND_API_KEY = import.meta.env.RESEND_API_KEY;
  const GOOGLE_SHEET_ID = import.meta.env.GOOGLE_SHEET_ID;
  const GOOGLE_SERVICE_ACCOUNT_EMAIL = import.meta.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const GOOGLE_PRIVATE_KEY = import.meta.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  try {
    const body = await request.json();

    // 1. Validate Input
    const validatedData = contactFormSchema.safeParse(body);
    if (!validatedData.success) {
      return new Response(
        JSON.stringify({
          message: "Validation failed",
          errors: validatedData.error.flatten().fieldErrors
        }),
        { status: 400 }
      );
    }

    const { name, email, phoneNumber, message } = validatedData.data;

    const resend = new Resend(RESEND_API_KEY);

    // Results tracking
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
      // Thank you email to user
      await resend.emails.send({
        from: "Thagai <hello.thagai@gmail.com>",
        to: email,
        subject: "We've received your inquiry - Thagai",
        text: `Dear ${name},\n\nThank you for reaching out to Thagai. We have received your inquiry and our team will contact you shortly.\n\nBest regards,\nThe Thagai Team`,
      });

      // Notification to team
      await resend.emails.send({
        from: "Thagai Website <hello.thagai@gmail.com>",
        to: "hello.thagai@gmail.com",
        subject: `New Inquiry from ${name}`,
        text: `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phoneNumber}\nMessage: ${message || "N/A"}`,
      });
      emailSuccess = true;
    } catch (e) {
      console.error("Resend Email Error:", e);
      errors.push("Failed to send notification emails");
    }

    // 4. Return Final Status
    if (sheetSuccess && emailSuccess) {
      return new Response(
        JSON.stringify({ message: "Inquiry submitted successfully!" }),
        { status: 200 }
      );
    } else if (sheetSuccess || emailSuccess) {
      return new Response(
        JSON.stringify({
          message: "Inquiry partially processed.",
          warnings: errors
        }),
        { status: 207 } // Multi-Status
      );
    } else {
      return new Response(
        JSON.stringify({ message: "Failed to process inquiry.", errors }),
        { status: 500 }
      );
    }

  } catch (error) {
    console.error("Internal Server Error:", error);
    return new Response(
      JSON.stringify({ message: "An unexpected error occurred." }),
      { status: 500 }
    );
  }
};
