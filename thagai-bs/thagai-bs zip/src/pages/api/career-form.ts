import type { APIRoute } from "astro";

export const prerender = false;

const WEBHOOK_URL =
  "https://activepieces.blueswype.org/api/v1/webhooks/oOR3R3UJ7pTs1msbwmVpp";

export const POST: APIRoute = async ({ request }) => {
  const WEBHOOK_SECRET = import.meta.env.AP_SECRET;

  const body = await request.json();
  const { name, email, phoneNumber } = body;

  if (!name || !email || !phoneNumber) {
    return new Response(
      JSON.stringify({ message: "Please fill in all fields" }),
      {
        status: 400,
      }
    );
  }

  if (!WEBHOOK_SECRET) {
    console.error("WEBHOOK_SECRET is not configured");
    return new Response(
      JSON.stringify({ message: "Server configuration error" }),
      {
        status: 500,
      }
    );
  }

  try {
    const webhookResponse = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "ap-api-key": `${WEBHOOK_SECRET}`,
      },
      body: JSON.stringify({
        name,
        email,
        phone: phoneNumber,
      }),
    });
    console.log(await webhookResponse.status);
    console.log(await webhookResponse.text());

    if (!webhookResponse.ok) {
      console.error("Webhook request failed:", await webhookResponse.text());
      return new Response(
        JSON.stringify({ message: "Failed to submit form. Please try again." }),
        {
          status: 500,
        }
      );
    }

    return new Response(
      JSON.stringify({ message: "Form submitted successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error submitting form:", error);
    return new Response(
      JSON.stringify({ message: "Failed to submit form. Please try again." }),
      {
        status: 500,
      }
    );
  }
};
