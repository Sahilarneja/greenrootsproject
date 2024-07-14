import React, { useState } from 'react';
import '../styles/contactus.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation to ensure all fields are filled
    if (!name || !email || !subject || !message) {
      toast.error('All fields are required.');
      return;
    }

    // Prepare data object to send to backend
    const contactData = {
      name,
      email,
      subject,
      message
    };

    try {
      // Send POST request to backend API
      const response = await axios.post('http://localhost:8000/api/contact', contactData);

      // Handle successful response
      if (response.status === 201) {
        toast.success('Message sent successfully!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        toast.error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      // Handle error response from server
      console.error('Error sending message:', error);
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <div className="contact-content">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3516.0486059384552!2d76.81095267559604!3d28.20583580332931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d4802d0000001%3A0x48162296a5280624!2sGreenroots%20Renewable%20Energy%20Pvt.%20Ltd!5e0!3m2!1sen!2sin!4v1720597354245!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Location Map"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="contact-info">
            <div className="info-item">
              <span role="img" aria-label="location">
                📍
              </span>
              C-32, Bhagat Singh Colony, U.I.T., Bhiwadi, Rajasthan 301019
            </div>
            <div className="info-item">
              <span role="img" aria-label="phone">
                📞
              </span>
              1-415-123-4567
            </div>
            <div className="info-item">
              <span role="img" aria-label="email">
                ✉️
              </span>
              contact@company.com
            </div>
          </div>
        </div>
        <div className="form-container">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </label>
            <label>
              Subject:
              <input
                type="text"
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Subject"
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message..."
                required
              ></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactUs;
