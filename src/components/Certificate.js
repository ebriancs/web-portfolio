import React from "react";
import "./Certificate.scss";
import internshipCert from "../assets/certs/internship.jpg";
import introToHtmlCert from "../assets/certs/introduction_to_html.jpg";
import introToCssCert from "../assets/certs/introduction_to_css.jpg";
import introToJsCert from "../assets/certs/introduction_to_javascript.jpg";
import jsIntermediateCert from "../assets/certs/javascript_intermediate.jpg";
import theGreatHackathonCert from "../assets/certs/the_great_hackathon.jpg";

const certs = [
  { id: 1, name: "Internship", image: internshipCert },
  { id: 2, name: "The Great Hackathon", image: theGreatHackathonCert },
  { id: 3, name: "Introduction to HTML", image: introToHtmlCert },
  { id: 4, name: "Introduction to CSS", image: introToCssCert },
  { id: 5, name: "Introduction to JavaScript", image: introToJsCert },
  { id: 6, name: "JavaScript Intermediate", image: jsIntermediateCert },
];

function Certificate() {
  return (
    <div className="Certificate" id="certificate">
      <div className="texts">
        <span>CERTIFICATES</span>
      </div>

      <div className="certificate-container">
        {certs.map((cert, index) => {
          const isLast = index === certs.length - 1;
          const isOdd = (index + 1) % 2 !== 0;
          const isEven = (index + 1) % 2 === 0;

          let rotateValue = "";
          if (isLast) {
            rotateValue = "none";
          } else if (isOdd) {
            rotateValue = `rotate(${-10 - Math.floor(index / 2) * 3}deg)`;
            console.log(`isOdd: ${rotateValue}`);
          } else if (isEven) {
            rotateValue = `rotate(${10 + Math.floor(index / 2) * 3}deg)`;
            console.log(`isEven: ${rotateValue}`);
          }

          return (
            <div
              className="certificate-item"
              key={cert.id}
              style={{ transform: rotateValue }}
            >
              <img src={cert.image} alt={cert.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Certificate;
