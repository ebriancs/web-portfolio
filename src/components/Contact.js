import React, { useState } from "react";
import { sendContactFormData } from "../api/common";
import { toast, Toaster } from "react-hot-toast";
import countryCodes from "../data/Data";
import "./Contact.scss";

function Contact() {
  const [countryCode, setCountryCode] = useState("+63");
  const [lastSubmitTime, setLastSubmitTime] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });

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

    const currentTime = Date.now();
    if (currentTime - lastSubmitTime < 5000) {
      console.log(currentTime - lastSubmitTime);
      toast.error("Please wait a moment before submitting again.", {
        duration: 3000,
      });
      return;
    }

    const { name, email, mobile, subject, message } = formData;
    const payload = {
      name,
      email,
      mobile: `${countryCode}${mobile}`,
      subject,
      message,
    };

    try {
      const response = await sendContactFormData(payload);
      toast.success(response.data.message, {
        duration: 3000,
      });
      setLastSubmitTime(currentTime)
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="Contact" id="contact">
      {/**TOASTER */}
      <Toaster position="top-right" reverseOrder={false} />
      {/**RIGHT CONTAINER */}
      <div className="right-container">
        <div className="texts-container">
          <span>CONTACT, </span>if you have any inquiries, don't hesitate to
          reach out. Feel free to send me a message anytime, and I'll respond as
          quickly as possible.
        </div>
      </div>
      {/**LEFT CONTAINER */}
      <div className="left-container">
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <h3>Send your message here!</h3>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Please enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
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
                <select
                  name=""
                  id=""
                  value={countryCode}
                  onChange={handleChangeCountryCode}
                  className="country-code-select"
                >
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
