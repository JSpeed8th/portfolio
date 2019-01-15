import React from "react";
import "./about.css";
import "../App.css";
import backgroundimage from "../images/about_me.jpg";
import portrait from "../images/portrait2.jpg";

const about = props => {
  return (
    <div className="about view">
      <img className="background-image" src={backgroundimage} />
      <h1 className="page-title">About</h1>
      <div className="about-modal">
        <img
          src={portrait}
          style={{
            height: "45vh",
            width: "25vw",
            borderRadius: "150px",
            backgroundPosition: "center",
            backgroundSize: "200% 100%"
          }}
        />
        <p>lorem ipsem</p>
      </div>
    </div>
  );
};

export default about;
