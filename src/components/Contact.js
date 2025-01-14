import React, { useState } from "react";
import "./Contact.scss";
import countryCodes from "./Data";

function Contact() {
  const [currentCountryCode, setCurrentCountryCode] = useState("+63");

  const handleCurrentCountryCode = (e) => {
    setCurrentCountryCode(e.target.value);
  };

  return (
    <div className="Contact" id="contact">
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
          <form>
            <h3>Send your message here!</h3>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Please enter your name"
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
                required
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-group">
              <div className="mobile-input-container">
                <select
                  name=""
                  id=""
                  value={currentCountryCode}
                  onChange={handleCurrentCountryCode}
                  className="country-code-select"
                >
                  {countryCodes.map((countryCode) => (
                    <option value={countryCode.code} key={countryCode}>
                      {countryCode.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  placeholder="Please enter your mobile number"
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
