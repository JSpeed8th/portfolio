import React from "react";
import "./footer.css";
import ReactLogo from "../../assets/images/react-logo.png";

const reactFooter = () => {
  return (
    <footer>
      <img className="react-logo" src={ReactLogo} alt="React Logo" />;
    </footer>
  );
};

export default reactFooter;
