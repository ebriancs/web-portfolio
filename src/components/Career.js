import React, { useState } from "react";
import "./Career.scss";
import lipa_engineering_img1 from "../assets/job/lipa/engineering/img1.jpg";
import lipa_engineering_img2 from "../assets/job/lipa/engineering/img2.jpg";
import lipa_engineering_img3 from "../assets/job/lipa/engineering/img3.jpg";
import lipa_assessor_img1 from "../assets/job/lipa/assessor/img1.jpg";
import lipa_assessor_img2 from "../assets/job/lipa/assessor/img2.jpg";
import lipa_assessor_img3 from "../assets/job/lipa/assessor/img3.jpg";
import lipa_assessor_img4 from "../assets/job/lipa/assessor/img4.jpg";
import lipa_assessor_img5 from "../assets/job/lipa/assessor/img5.jpg";
import lipa_bpl_img1 from "../assets/job/lipa/bpl/img1.jpg";
import lipa_bpl_img2 from "../assets/job/lipa/bpl/img2.jpg";
import lipa_others_img1 from "../assets/job/lipa/others/img1.jpg";
import lipa_others_img2 from "../assets/job/lipa/others/img2.jpg";
import lipa_others_img3 from "../assets/job/lipa/others/img3.jpg";
import lipa_others_img4 from "../assets/job/lipa/others/img4.jpg";
import lipa_others_img5 from "../assets/job/lipa/others/img5.jpg";
import lipa_others_img6 from "../assets/job/lipa/others/img6.jpg";
import alcala_bpl_img1 from "../assets/job/alcala/bpl/img1.jpg";
import alcala_bpl_img2 from "../assets/job/alcala/bpl/img2.jpg";
import alcala_bpl_img3 from "../assets/job/alcala/bpl/img3.jpg";
import alcala_treasury_img1 from "../assets/job/alcala/treasury/img1.jpg";
import alcala_treasury_img2 from "../assets/job/alcala/treasury/img2.jpg";
import alcala_treasury_img3 from "../assets/job/alcala/treasury/img3.jpg";

function Career() {
  const [selectedOption, setSelectedOption] = useState(1);
  const [zoomImg, setZoomImg] = useState(null);

  const lipa_engineering_imgs = [
    lipa_engineering_img1,
    lipa_engineering_img2,
    lipa_engineering_img3,
  ];
  const lipa_assessor_imgs = [
    lipa_assessor_img1,
    lipa_assessor_img2,
    lipa_assessor_img3,
    lipa_assessor_img4,
    lipa_assessor_img5,
  ];
  const lipa_bpl_imgs = [lipa_bpl_img1, lipa_bpl_img2];
  const lipa_others_imgs = [
    lipa_others_img1,
    lipa_others_img2,
    lipa_others_img3,
    lipa_others_img4,
    lipa_others_img5,
    lipa_others_img6,
  ];
  const alcala_bpl_imgs = [alcala_bpl_img1, alcala_bpl_img2, alcala_bpl_img3];
  const alcala_treasury_imgs = [
    alcala_treasury_img1,
    alcala_treasury_img2,
    alcala_treasury_img3,
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleZoomImgClick = (img) => {
    setZoomImg(img);
  };

  const handleZoomImgClose = (img) => {
    setZoomImg(null);
  };

  return (
    <div className="Career" id="career">
      <div className="texts">
        This is about my <span>CAREER, </span> here is some information about my
        work experience.
      </div>

      <div className="ilgu-career">
        <h3>
          One Document Corporation - Integrated Local Government Unit (ILGU)
        </h3>
        <div className="options">
          <button
            onClick={() => handleOptionClick(1)}
            className={selectedOption === 1 ? "active" : ""}
          >
            Lipa LGU
          </button>
          <button
            onClick={() => handleOptionClick(2)}
            className={selectedOption === 2 ? "active" : ""}
          >
            Bacoor LGU
          </button>
          <button
            onClick={() => handleOptionClick(3)}
            className={selectedOption === 3 ? "active" : ""}
          >
            Pateros LGU
          </button>
          <button
            onClick={() => handleOptionClick(4)}
            className={selectedOption === 4 ? "active" : ""}
          >
            Alcala LGU
          </button>
        </div>
        <div className="options-content">
          {selectedOption === 1 && (
            <div className="option-content">
              <h4>
                Full-stack Developer & Implementor - Assigned to the City
                Government of Lipa, Batangas
              </h4>
              <p>
                I began my professional career with One Document Corporation,
                where my role was as a full-stack developer and system
                implementor for the City Government of Lipa. I was involved in
                working on an online web-based application built using Python
                Django and VueJS. I joined the project as a junior team member
                and soon advanced to become the main developer of the online
                web-based application project for the LGU.
                <h4>Key Contributions:</h4>
                <ul>
                  <li>
                    <b>Customization:</b> Tailored the system to meet the
                    specific needs of the City Government of Lipa.
                  </li>
                  <li>
                    <b>Testing & Deployment:</b> Conducted testing and
                    successfully deployed the application to both{" "}
                    <b>PROD (AWS)</b> and <b>UAT (Heroku)</b> environments.
                  </li>
                  <li>
                    <b>System Presentation:</b> Presented the system to various
                    City Government offices, including:
                    <ul>
                      <li>Business Permit and Licensing Office</li>
                      <li>City Engineering Office</li>
                      <li>City Assessor's Office</li>
                      <li>City Treasurer's Office</li>
                    </ul>
                  </li>
                  <li>
                    <b>User Training:</b> Delivered comprehensive training
                    sessions to staff members, empowering them with the
                    knowledge and skills to effectively manage the application
                    as administrators.
                  </li>
                </ul>
              </p>
              <div className="gallery">
                <div className="offices-container">
                  <h4>Lipa City Engineering</h4>
                  <div className="engineering">
                    {lipa_engineering_imgs.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        onClick={() => handleZoomImgClick(img)}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
                <div className="offices-container">
                  <h4>Lipa City Assessor</h4>
                  <div className="assessor">
                    {lipa_assessor_imgs.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        onClick={() => handleZoomImgClick(img)}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
                <div className="offices-container">
                  <h4>Lipa City Business Permit and Licensing</h4>
                  <div className="bpl">
                    {lipa_bpl_imgs.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        onClick={() => handleZoomImgClick(img)}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
                <div className="offices-container">
                  <h4>Others</h4>
                  <div className="others">
                    {lipa_others_imgs.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        onClick={() => handleZoomImgClick(img)}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
                {zoomImg && (
                  <div className="zoom-overlay" onClick={handleZoomImgClose}>
                    <img src={zoomImg} alt="" />
                  </div>
                )}
              </div>
            </div>
          )}
          {selectedOption === 2 && (
            <div className="option-content">
              <h4>
                Full-stack Developer & Support - Assigned to the City Government
                of Bacoor, Cavite
              </h4>
              <p>
                After successfully contributing to the City Government of Lipa,
                my role extended to managing and overseeing the online web-based
                application for the City Government of Bacoor. The application
                was already deployed and operating when it turned over to me to
                ensure continuous development, improvement, and support for
                ongoing concerns.
                <h4>Key Contributions:</h4>
                <ul>
                  <li>
                    <b>System Migration:</b> Redeveloped the entire system to
                    successfully migrate it from a cloud-based hosted to an
                    on-premise hosting environment.
                  </li>
                  <li>
                    <b>External Payment Integration:</b> Integrated the system
                    with the external payment platform <b>MultiSys</b>.
                  </li>
                  <li>
                    <b>Troubleshooting Payment Integrations:</b> Debugged and
                    resolved issues with the integration to <b>PisoPay</b>,
                    fixing transaction failures.
                  </li>
                  <li>
                    <b>System Enhancements:</b> Added various minor features to
                    improve system functionality and user experience.
                  </li>
                </ul>
              </p>
            </div>
          )}
          {selectedOption === 3 && (
            <div className="option-content">
              <h4>
                Full-stack Developer - Assigned to the City Government of
                Pateros
              </h4>
              <p>
                Over time, my role expanded to managing and overseeing multiple
                online web-based applications for Local Government Units (LGUs).
                As part of these projects, I worked remotely, connecting to
                their servers for continuous development and support.
                <h4>Key Contributions:</h4>
                <ul>
                  <li>
                    <b>Payment System Integration:</b> Successfully developed
                    and tested the integration of the system with the
                    <b> LinkBiz Portal</b> from the
                    <b> LandBank of the Philippines</b>.
                  </li>
                  <li>
                    <b>Collaboration:</b> Worked closely with the
                    <b> LandBank of the Philippines</b> development team to
                    ensure a successful system integration.
                  </li>
                  <li>
                    <b>Environment Preparation and Deployment:</b> Set up,
                    prepared, and deployed the application to both
                    <b> PROD (AWS) </b>
                    and <b>UAT (Heroku)</b> environments.
                  </li>
                </ul>
              </p>
            </div>
          )}
          {selectedOption === 4 && (
            <div className="option-content">
              <h4>
                Full-stack Developer & Implementor - Assigned to the Municipal
                Government of Alcala, Pangasinan
              </h4>
              <p>
                My role continues to expand as I handle projects for various
                Local Government Units (LGUs). I am actively involved from the
                initial stages, tailoring the online web-based application to
                meet their specific needs. This includes collaborating with
                administrative staff and department heads to discuss processes,
                working with the team assigned onsite at the LGU office to
                manage documentation, and conducting user training to prepare
                them as system administrators for future deployments.
                <h4>Key Contributions:</h4>
                <ul>
                  <li>
                    <b>System Presentation:</b> Presented the application to
                    various office staff and department heads, facilitating
                    clear understanding and adoption.
                  </li>
                  <li>
                    <b>Customization:</b> Tailored the system based on in-depth
                    discussions to address each LGU's unique requirements.
                  </li>
                  <li>
                    <b>Infrastructure Preparation:</b> Set up and prepared the
                    application for UAT and PROD deployment using an on-premise
                    infrastructure.
                  </li>
                </ul>
              </p>
              <div className="gallery">
                <div className="offices-container">
                  <h4>Alcala Business Permit and Licensing</h4>
                  <div className="bpl">
                    {alcala_bpl_imgs.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        onClick={() => handleZoomImgClick(img)}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
                <div className="offices-container">
                  <h4>Alcala Treasury</h4>
                  <div className="treasury">
                    {alcala_treasury_imgs.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        onClick={() => handleZoomImgClick(img)}
                        alt=""
                      />
                    ))}
                  </div>
                </div>
                {zoomImg && (
                  <div className="zoom-overlay" onClick={handleZoomImgClose}>
                    <img src={zoomImg} alt="" />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Career;
