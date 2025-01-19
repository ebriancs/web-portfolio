import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { isScreenDimensionOK } from "../utils/isScreenDimensionOK";
import "./Modal.scss";

export const Warning = ({ title, message, btnText }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="Modal Warning">
      <div className="message">
        <h1>{title}</h1>
        <p>{message}</p>
        <button onClick={handleCloseModal}>{btnText}</button>
      </div>
    </div>
  );
};

Warning.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  btnText: PropTypes.string.isRequired,
};

export const ScreenWarning = ({ minWidth, minHeight, title, message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const checkDimensions = () => {
      const isVisible = !isScreenDimensionOK(minWidth, minHeight);
      setVisible(isVisible);
      if (isVisible) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "auto";
      }
    };

    checkDimensions();
    window.addEventListener("resize", checkDimensions);

    return () => {
      window.removeEventListener("resize", checkDimensions);
      document.body.style.overflow = "";
    };
  }, [minWidth, minHeight]);

  if (!visible) return null;

  return (
    <div className="Modal ScreenWarning">
      <div className="message">
        <h1>{title}</h1>
        <p>{message}</p>
      </div>
    </div>
  );
};

ScreenWarning.propTypes = {
  minWidth: PropTypes.number.isRequired,
  minHeight: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
