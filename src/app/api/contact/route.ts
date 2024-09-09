import { NextResponse } from "next/server";
import nodemailer from "nodemailer"; // Import Nodemailer

export async function POST(request: Request) {
  try {
    // Parse the request body
    const { firstName, surName, email, message } = await request.json();
    console.log({ firstName, surName, email, message });

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Replace with your email
        pass: process.env.EMAIL_PASS, // Replace with your email password or app password
      },
    });

    // Define the email options with all form details
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender's email address
      to: process.env.EMAIL_USER, // Replace this with your own email to receive the message
      subject: `New Contact Form Submission from ${firstName} ${surName}`, // Subject line
      text: `
        You have a new message from your contact form:
        
        First Name: ${firstName}
        Surname: ${surName}
        Email: ${email}
        
        Message:
        ${message}
      `, // Email body content with all form details
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);

    // Return success response
    return NextResponse.json(
      { message: "Form submitted and email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);

    // Return error response
    return NextResponse.json(
      { message: "Error submitting the form or sending email." },
      { status: 500 }
    );
  }
}
