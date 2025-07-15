import React, { useState } from 'react';
import '../styles/contactus.css';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import contactImage from '../assets/main/GetIntouch.png'; // Ensure the image is in the correct path

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
      const response = await axios.post('https://greenrootsrenewable.onrender.com/api/contact', contactData);

      // Handle successful response
      if (response.status === 201) {
        toast.success('Your message has been sent successfully. We will reach out soon!');
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        toast.error('Failed to send message. Please try again later.');
      }
    } catch (error) {
      // Handle error response from server
      console.error('Error occurred in contacting:', error);
      toast.error('Failed to send message. Please try again later.');
    }
  };

  return (
    <div id="contact" className="contact-us">
      <div className="contact-content">
        <div className="image-container">
          <img src={contactImage} alt="Contact Us" />
        </div>
        <div className="form-container">
          <h2>Feel free to contact us anytime</h2>
          <h4>We will get back to you as soon as possible</h4>
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
