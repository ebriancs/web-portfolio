import React from "react";
import "./Project.scss";
import lipaLogo from "../assets/logos/lipa.png";
import bacoorLogo from "../assets/logos/bacoor.png";
import paterosLogo from "../assets/logos/pateros.png";
import alcalaLogo from "../assets/logos/alcala.png";

function Project() {
  return (
    <div className="Project" id="project">
      <div className="project-container">
        <h2>INTEGRATED LOCAL GOVERNMENT UNIT SYSTEM</h2>
        <div className="ilgu-project">
          <div className="ilgu-item">
            <img src={lipaLogo} alt="" />
            <h3>
              LIPA
              <br />
              ONE STOP SHOP SYSTEM
            </h3>
          </div>
          <div className="ilgu-item">
            <img src={bacoorLogo} alt="" />
            <h3>
              BACOOR
              <br />
              ONE STOP SHOP SYSTEM
            </h3>
          </div>
          <div className="ilgu-item">
            <img src={paterosLogo} alt="" />
            <h3>
              PATEROS
              <br />
              ONE STOP SHOP SYSTEM
            </h3>
          </div>
          <div className="ilgu-item">
            <img src={alcalaLogo} alt="" />
            <h3>
              ALCALA
              <br />
              ONE STOP SHOP SYSTEM
            </h3>
          </div>
        </div>
      </div>
      <div className="texts">
        <span>P</span>
        <span>R</span>
        <span>O</span>
        <span>J</span>
        <span>E</span>
        <span>C</span>
        <span>T</span>
        <span>S</span>
      </div>
    </div>
  );
}

export default Project;
