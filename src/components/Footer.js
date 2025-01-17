import React from "react";
import "./Footer.scss";
import resumePdf from "../assets/pdfs/johnebrianmanalo_resume.pdf";

function Footer() {
  const socialMedias = [
    {
      label: "Facebook",
      icon: "fab fa-facebook",
      url: process.env.REACT_APP_FACEBOOK_URL,
    },
    {
      label: "Twitter",
      icon: "fab fa-twitter",
      url: process.env.REACT_APP_X_URL,
    },
    {
      label: "Instagram",
      icon: "fab fa-instagram",
      url: process.env.REACT_APP_INSTAGRAM_URL,
    },
    {
      label: "LinkedIn",
      icon: "fab fa-linkedin",
      url: process.env.REACT_APP_LINKEDIN_URL,
    },
    {
      label: "GitHub",
      icon: "fab fa-github",
      url: process.env.REACT_APP_GITHUB_URL,
    },
  ];

  return (
    <footer className="Footer">
      <div className="socialmedia-container">
        {socialMedias.map((socialMedia) => (
          <a href={socialMedia.url} target="_blank" rel="noopener noreferrer">
            <i className={socialMedia.icon}></i>
          </a>
        ))}
      </div>
      <div className="resume-container">
        <a
          href={resumePdf}
          download="johnebrianmanalo_resume.pdf"
          className="download-icon"
        >
          <i className="fa fa-download"></i> Download Resume
        </a>
      </div>
      <p className="outro">
        &copy; {new Date().getFullYear()} John Ebrian Manalo. All rights
        reserved.
      </p>
    </footer>
  );
}

export default Footer;
