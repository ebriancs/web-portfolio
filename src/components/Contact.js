import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import countryCodes from '../data/Data';
import './Contact.scss';

function Contact() {
  const [loading, setLoading] = useState(false);
  const [countryCode, setCountryCode] = useState('+63');
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: '',
  });

  const sendEmail = async () => {
    const { name, email, mobile, subject, message } = formData;
    return emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID_CONTACT,
      {
        from_name: name,
        from_email: email,
        phone: `${countryCode}${mobile}`,
        subject: subject,
        message: message,
        time: new Date().toLocaleString(),
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    );
  };

  const handleChangeCountryCode = (e) => {
    setCountryCode(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    const currentTime = Date.now();
    if (currentTime - lastSubmitTime < 5000) {
      console.log(currentTime - lastSubmitTime);
      toast.error('Please wait a moment before submitting again.', {
        duration: 10000,
      });
      return;
    }

    setLoading(true);

    try {
      const response = await sendEmail();
      console.log('EmailJS response:', response);
      toast.success('Email sent successfully!', {
        duration: 3000,
      });
    } catch (error) {
      setLoading(false);
      console.error('EmailJS send error:', error);
      toast.error('Failed to send email notification.');
    } finally {
      setLoading(false);
      setLastSubmitTime(currentTime);
    }
  };

  return (
    <div className="Contact" id="contact">
      {/**TOASTER */}
      <Toaster position="top-right" reverseOrder={false} />
      {/**RIGHT CONTAINER */}
      <div className="right-container">
        <div className="texts-container">
          <span>CONTACT, </span>if you have any inquiries, don't hesitate to reach out. Feel free to send me a message anytime, and I'll respond as
          quickly as possible.
        </div>
      </div>
      {/**LEFT CONTAINER */}
      <div className="left-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h3>Send your message here!</h3>
            <div className="form-group">
              <input type="text" id="name" name="name" placeholder="Please enter your name" value={formData.name} onChange={handleChange} required />
              <label htmlFor="name">Name</label>
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Please enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-group">
              <div className="mobile-input-container">
                <select name="" id="" value={countryCode} onChange={handleChangeCountryCode} className="country-code-select">
                  {countryCodes.map((countryCode, index) => (
                    <option key={index} value={countryCode.code}>
                      {countryCode.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Please enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                />
              </div>
              <label htmlFor="mobile">Mobile No.</label>
            </div>
            <div className="form-group">
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="Please enter your subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <label htmlFor="subject">Subject</label>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                placeholder="Please type your message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor="message">Message</label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
