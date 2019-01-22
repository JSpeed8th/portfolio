import React from "react";
import SocialMedia from "../socialmedia/socialmedia";
import "../../Normalize.css";
import "./contact.css";
import "../../containers/App.css";
import backgroundimage from "../../assets/images/contact.jpg";

const contact = () => {
  const skillarray = [
    "html-logo.jpg",
    "css-logo.jpg",
    "sass-logo.jpg",
    "javascript-logo.jpg",
    "react-logo.jpg",
    "rails-logo.png",
    "ruby-logo.png"
  ];

  const newArray = skillarray.map((skill, index) => {
    return (
      <img
        src={require("../../assets/images/SkillLanguages/" + skill)}
        alt=""
      />
    );
  });

  return (
    <div className="contact view">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        <SocialMedia />
        <h1 className="page-title">Skills</h1>
        <div className="skill-modal">
          {newArray}

          <a
            href="https://docs.google.com/document/d/1yyWKDvS-OqJKOqnuZJ874OAvofttr_whVkmjGPjGrr8/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="resume" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default contact;
