import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be less than 80 characters."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .max(160, "Email address is too long."),

  subject: z
    .string()
    .trim()
    .min(3, "Subject must be at least 3 characters.")
    .max(120, "Subject must be less than 120 characters."),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(5000, "Message must be less than 5000 characters."),
});

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          success: false,
          message: "Email service is not configured.",
        },
        { status: 500 },
      );
    }

    const body: unknown = await request.json();

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Please check the information you entered.",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const { name, email, subject, message } = result.data;

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["muzamilofficial1213@gmail.com"],
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111827; max-width: 680px; margin: 0 auto; padding: 24px;">
          <h1 style="margin: 0 0 24px; font-size: 24px;">
            New Portfolio Contact
          </h1>

          <div style="border: 1px solid #e5e7eb; border-radius: 12px; padding: 20px;">
            <p style="margin: 0 0 12px;">
              <strong>Name:</strong> ${escapeHtml(name)}
            </p>

            <p style="margin: 0 0 12px;">
              <strong>Email:</strong> ${escapeHtml(email)}
            </p>

            <p style="margin: 0 0 12px;">
              <strong>Subject:</strong> ${escapeHtml(subject)}
            </p>

            <div style="margin-top: 20px;">
              <strong>Message:</strong>

              <div style="margin-top: 8px; padding: 16px; background: #f9fafb; border-radius: 8px; white-space: pre-wrap;">
                ${escapeHtml(message)}
              </div>
            </div>
          </div>

          <p style="margin-top: 24px; font-size: 13px; color: #6b7280;">
            This message was submitted through muzamilportfolio1.netlify.app.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend email error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your message right now.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your message has been sent successfully.",
        id: data?.id,
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}