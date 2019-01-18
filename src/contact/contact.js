import React from "react";
import SocialMedia from "../socialmedia/socialmedia";
import "./contact.css";
import "../App.css";
import backgroundimage from "../images/contact.jpg";

const contact = props => {
  return (
    <div className="contact view">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        <SocialMedia />
        <h1 className="page-title">Skills</h1>
      </div>
    </div>
  );
};

export default contact;
