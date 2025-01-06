const nodemailer = require("nodemailer");

const sendEmail = async (to, subject, html) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Failed to send email:", error.message);
    throw error;
  }
};

module.exports = sendEmail;
