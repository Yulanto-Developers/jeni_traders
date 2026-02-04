import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { fname, lname, phone, email, message } = await req.json();

    /* ================= VALIDATION ================= */
    if (!fname || !lname || !phone || !email || !message) {
      return NextResponse.json(
        { status: 400, message: "All fields are required" },
        { status: 400 }
      );
    }

    const fullName = `${fname} ${lname}`;

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
      return NextResponse.json(
        { status: 500, message: "Email service not configured" },
        { status: 500 }
      );
    }

    /* ================= ADMIN EMAIL ================= */
    const adminRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "JUAN TRADERS",
          email: "thunivuvarisu1234@gmail.com", // MUST be verified in Brevo
        },
        to: [{ email: "thunivuvarisu1234@gmail.com" }],
        replyTo: {
          email,
          name: fullName,
        },
        subject: "New Enquiry from JUAN TRADERS",
        htmlContent: `
          <h2>New Contact Enquiry</h2>
          <p><b>Name:</b> ${fullName}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b> ${message}</p>
        `,
      }),
    });

    const adminData = await adminRes.json();
    if (!adminRes.ok) {
      throw new Error(adminData?.message || "Admin email failed");
    }

    /* ================= CLIENT EMAIL ================= */
    const clientRes = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "api-key": BREVO_API_KEY,
        "content-type": "application/json",
      },
      body: JSON.stringify({
        sender: {
          name: "JUAN TRADERS",
          email: "thunivuvarisu1234@gmail.com", // MUST be verified
        },
        to: [{ email, name: fullName }],
        subject: "Thank you for contacting JUAN TRADERS",
        htmlContent: `
          <h2>Thank You for Contacting JUAN TRADERS</h2>
          <p>Dear <b>${fullName}</b>,</p>
          <p>We have received your enquiry and will contact you shortly.</p>
          <p><b>Your Message:</b></p>
          <p>${message}</p>
          <br />
          <p>Regards,<br /><b>JUAN TRADERS</b></p>
        `,
      }),
    });

    const clientData = await clientRes.json();
    if (!clientRes.ok) {
      throw new Error(clientData?.message || "Client email failed");
    }

    /* ================= SUCCESS ================= */
    return NextResponse.json({
      status: 200,
      message: "Enquiry submitted successfully",
    });
  } catch (error: any) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      { status: 500, message: error.message },
      { status: 500 }
    );
  }
}
