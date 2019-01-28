import React from "react";
import SocialMedia from "../socialmedia/socialmedia";
import "../../Normalize.css";
import "./contact.css";
import "../../containers/App.css";
import backgroundimage from "../../assets/images/contact.jpg";

const contact = props => {
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
        className = 'skills'
        src={require("../../assets/images/SkillLanguages/" + skill)}
        alt=""
        key = {index}
      />
    );
  });

  return (
    <div className="contact view"
    onMouseOver = {props.collapseHandler}
    onMouseOut = {props.expandHandler}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        <SocialMedia />
        <h1 className="page-title">Skills</h1>
        <div className="skill-modal">
          {newArray}
            <div className="resume">
            <a
              href="https://docs.google.com/document/d/1yyWKDvS-OqJKOqnuZJ874OAvofttr_whVkmjGPjGrr8/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default contact;
