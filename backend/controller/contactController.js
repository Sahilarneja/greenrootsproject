const Contact = require('../models/contactModel');
const sendEmail = require('../utils/sendEmail'); // Adjust the path as per your file structure

const contactController = async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    // Save contact information to database
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    // Send email to the provided email address
    const toEmail = [email, 'kratiarora789@gmail.com'];
    const emailSubject = 'Thank you for contacting us';
    const emailContent = `<p>Dear ${name},</p>
                          <p>Thank you for contacting us. We will get back to you soon.</p>`;

    await sendEmail(toEmail, emailSubject, emailContent);

    // Respond to client with success message
    res.status(201).json({ message: 'Contact sent successfully' });
  } catch (error) {
    console.error('Error saving contact or sending email:', error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = contactController;
