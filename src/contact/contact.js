import React from "react";
import "./contact.css";
import "../App.css";
import backgroundimage from "../images/contact.jpg";

const contact = props => {
  return (
    <div className="contact view">
      <img className="background-image" src={backgroundimage} />
      <h1 className="page-title">Contact</h1>
    </div>
  );
};

export default contact;
