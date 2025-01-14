import React, { useState } from "react";
import "./Warning.scss";

const Warning = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="Warning">
      <div className="message">
        <h1>Website Under Construction</h1>
        <p>
          I'm working hard to bring this site to life. Stay tuned!
          <br />
          For best experience, please use a larger screen. Avoid using mobile
          devices for now.
          <br />
          <br />
          Please click OK to continue browsing.
        </p>
        <button onClick={handleClose} className="ok">
          OK
        </button>
      </div>
    </div>
  );
};

export default Warning;
