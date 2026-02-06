/**
 * Google Apps Script for Thagai Website Contact Form
 * 
 * Instructions:
 * 1. Create a Google Sheet.
 * 2. Name the first sheet "Leads".
 * 3. Add headers in Row 1: Timestamp, Name, Email, Phone, Message, Status
 * 4. Go to Extensions > Apps Script.
 * 5. Paste this code.
 * 6. Replace 'RECIPIENT_EMAIL' with hello.thagai@gmail.com
 * 7. Click Deploy > New Deployment > Web App.
 * 8. Execute as: Me, Who has access: Anyone.
 * 9. Copy the Web App URL and paste into ContactSection.tsx
 */

function doPost(e) {
    try {
        const data = JSON.parse(e.postData.contents);
        const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Leads");

        // Append the data
        sheet.appendRow([
            new Date(),
            data.name,
            data.email,
            data.phoneNumber,
            data.message || "",
            "New"
        ]);

        // Send Email Notification
        const recipient = "hello.thagai@gmail.com";
        const subject = "New Contact Form Submission: " + data.name;
        const body = `
      New inquiry received from Thagai Website:
      
      Name: ${data.name}
      Email: ${data.email}
      Phone: ${data.phoneNumber}
      Message: ${data.message || "No message provided."}
      
      View in Google Sheets: ${SpreadsheetApp.getActiveSpreadsheet().getUrl()}
    `;

        MailApp.sendEmail(recipient, subject, body);

        return ContentService.createTextOutput(JSON.stringify({
            status: "success",
            message: "Data recorded and email sent."
        })).setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        return ContentService.createTextOutput(JSON.stringify({
            status: "error",
            message: error.toString()
        })).setMimeType(ContentService.MimeType.JSON);
    }
}
