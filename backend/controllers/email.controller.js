// controllers/contact.controller.js
import nodemailer from 'nodemailer';
import Email from '../models/Email.js';

export const sendContactEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {

     const e=await Email.create({ name, email, subject, message });
     console.log(e)

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Send to admin
    await transporter.sendMail({
      from: `"Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      subject: `Contact: ${subject}`,
      replyTo: email,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Message:</strong><br>${message}</p>
      `
    });

    // 2. Auto-reply to user
    await transporter.sendMail({
      from: `"Your App Team" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thanks for contacting us!",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for reaching out! We’ve received your message and will respond shortly.</p>
        <p><strong>Your message:</strong><br>${message}</p>
        <br />
        <p>Best regards,<br/>YourApp Team</p>
      `
    });

    res.status(200).json({ message: "Message sent successfully ✉️" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error sending email" });
  }
}
