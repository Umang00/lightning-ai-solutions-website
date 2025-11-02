import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, budget, message } = body;

    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || "Not provided"}
Service: ${service}
Budget: ${budget}

Message:
${message}
    `;

    const mailFrom = process.env.MAIL_FROM || "Lightning AI Solutions <onboarding@resend.dev>";
    const mailTo = process.env.MAIL_TO || "umangthakkar005@gmail.com";

    await resend.emails.send({
      from: mailFrom,
      to: mailTo,
      subject: `New Contact Form: ${name} - ${service}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
