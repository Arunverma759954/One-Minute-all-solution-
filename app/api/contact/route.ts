import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER as string,
        pass: process.env.GMAIL_APP_PASSWORD as string,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER as string,
      to: process.env.GMAIL_TO as string,
      subject: `Atithi Home Enquiry ${subject}`,
      html: `
        <h2>Appointment Details</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return Response.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    console.error("MAIL ERROR:", error);
    return Response.json({
      success: false,
      message: "Failed to send email!",
    });
  }
}
