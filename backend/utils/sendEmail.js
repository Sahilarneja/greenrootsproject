const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com", // Outlook SMTP server
  port: 587,  
  secure: false, 
  auth: {
    user: process.env.OUTLOOK_USER,
    pass: process.env.OUTLOOK_PASS
  },
  pool: true,
  tls: {
    ciphers: 'SSLv3' 
  }
});


const sendEmail = async (toEmail, subject, htmlContent) => {
  try {
    const mailOptions = {
      from: process.env.OUTLOOK_USER, 
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
