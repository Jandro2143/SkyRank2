import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { company, name, email, phone, message } = req.body;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.your-email-provider.com', // e.g., Gmail, Outlook, or your hosting's SMTP
      port: 587,
      secure: false,
      auth: {
        user: 'alex.cedillo.e@gmail.com', // Replace with your email
        pass: 'Chop2143Chop', // Replace with your email password or app password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: email, // User's email
        to: 'alex.cedillo.e@gmail.com', // Your business email
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <p><strong>Company Name:</strong> ${company}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ success: false, message: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
