import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { fname, lname, phone, email, message } = await req.json();

    /*  VALIDATION  */
    if (!fname || !lname || !phone || !email || !message) {
      return NextResponse.json(
        { status: 400, message: "All fields are required" },
        { status: 400 }
      );
    }

    // const fullName = `${fname} ${lname}`;

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
      return NextResponse.json(
        { status: 500, message: "Email service not configured" },
        { status: 500 }
      );
    }

    /*  ADMIN EMAIL  */
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
          email: "thunivuvarisu1234@gmail.com",
        },
        to: [{ email: "thunivuvarisu1234@gmail.com" }],
        replyTo: {
          email,
          name: lname,
        },
        subject: "New Enquiry from JUAN TRADERS",

        htmlContent: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
</head>
<body style="font-family: Arial, sans-serif; background-color:#f4f4f4; padding:20px;">

  <div style="max-width:700px; margin:auto; background:#ffffff; border-radius:6px; overflow:hidden;">

    <!-- Header -->
    <div style="background:#eeeeee; padding:15px; text-align:center;">
      <h3 style="margin:0; color:#333;">
        Enquiry Details - ${new Date().toLocaleString()}
      </h3>
    </div>

    <!-- Table Content -->
    <div style="padding:20px;">
      <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
        
        <tr>
          <td style="padding:10px; border:1px solid #ddd;"><b>Name</b></td>
          <td style="padding:10px; border:1px solid #ddd;">${fname} ${lname}</td>
        </tr>

        <tr>
          <td style="padding:10px; border:1px solid #ddd;"><b>Phone</b></td>
          <td style="padding:10px; border:1px solid #ddd;">${phone}</td>
        </tr>

        <tr>
          <td style="padding:10px; border:1px solid #ddd;"><b>Email</b></td>
          <td style="padding:10px; border:1px solid #ddd;">${email}</td>
        </tr>

        <tr>
          <td style="padding:10px; border:1px solid #ddd;"><b>Message</b></td>
          <td style="padding:10px; border:1px solid #ddd;">${message}</td>
        </tr>

      </table>

      <!-- Warning -->
      <p style="margin-top:20px; color:red; font-weight:bold;">
        ⚠ Do not reply to this mail
      </p>
    </div>

    <!-- Footer -->
    <div style="background:#eeeeee; padding:15px; text-align:center;">
      <img 
        src="https://demo3.yulanto.in/jeni-traders/images/logo-1.png" 
        alt="JUAN TRADERS"
        style="max-width:140px;"
      />
    </div>

  </div>

</body>
</html>
`,

      }),
    });

    const adminData = await adminRes.json();
    if (!adminRes.ok) {
      throw new Error(adminData?.message || "Admin email failed");
    }

    /*  CLIENT EMAIL  */
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
          email: "thunivuvarisu1234@gmail.com",
        },
        to: [{ email, name: fname }],
        subject: "Thank you for contacting JUAN TRADERS",
        htmlContent: `
  <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; border: 1px solid #e5e5e5; padding: 20px;">
    <div style="text-align: center; margin-bottom: 20px;">
      <img 
        src="https://demo3.yulanto.in/jeni-traders/images/logo-1.png" 
        alt="JUAN TRADERS Logo" 
        style="max-width: 180px;"
      />
    </div>

    
    <h2 style="color: #2c2c2c; text-align: center;">
      Thank You for Contacting JUAN TRADERS
    </h2>

    <p>Dear <b>${fname}</b>,</p>

    <p>
      We have received your enquiry and our team will contact you shortly.
      Thank you for reaching out to us.
    </p>
 <p style="margin-top:20px; color:red; font-weight:bold;">
        ⚠ Do not reply to this mail
      </p>
    <br />

    <p>
      Regards,<br />
      <b>JUAN TRADERS</b>
    </p>

    <hr style="margin: 25px 0;" />

    
    <div style="font-size: 14px; color: #555;">
      <p><b>Contact Number:</b> +91 76395 82802</p>

      <p>
        <b>Office Address:</b><br />
        Pl No.08,<br />
        Door No.17,<br />
        Thiruvalluvar Street,<br />
        Ullagaram, Chennai - 600091.
      </p>
    </div>

  </div>
`,

      }),
    });

    const clientData = await clientRes.json();
    if (!clientRes.ok) {
      throw new Error(clientData?.message || "Client email failed");
    }

    /*  SUCCESS  */
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
