import React, { useEffect } from "react";
import "./Axie.scss";
import { useGlobalContext } from "./Global";

function Axie({ axieClose }) {
  const { isAxie, setIsAxie } = useGlobalContext();

  const handleAxieClose = () => {
    setIsAxie(false);
  };

  useEffect(() => {
    if (isAxie) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      if (isAxie) {
        document.body.style.overflow = "auto";
      }
    };
  }, [isAxie]);

  return (
    <div className="Axie">
      <h2 className="axie-header">AXIE</h2>

      <div className="axie-story">
        
      </div>

      <button className="exit" onClick={handleAxieClose}>Exit</button>
    </div>
  );
}

export default Axie;
