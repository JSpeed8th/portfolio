import React from "react";
import "./ReactFooter.css";
import ReactLogo from "../../assets/images/react-logo.png";

const ReactFooter = () => {
  return (
    <footer>
      <img className="react-logo" src={ReactLogo} alt="React Logo" />;
    </footer>
  );
};

export default ReactFooter;
