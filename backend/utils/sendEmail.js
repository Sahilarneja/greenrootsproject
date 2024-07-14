const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER , // replace with your email
    pass: process.env.PASSWORD // replace with your password or app-specific password
  }
});

const sendEmail = async (toEmail, subject, htmlContent) => {
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: toEmail,
      subject: subject,
      html: htmlContent
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${toEmail}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

module.exports = sendEmail;
