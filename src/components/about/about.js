import React from "react";
import SocialMedia from "../socialmedia/socialmedia";
import Paragraph from './Paragraph';
import "./About.css";
import "../../containers/App.css";
import backgroundimage from "../../assets/images/about.jpg";

const About = ({ collapseHandler, expandHandler }) => {
  return (
    <div className="about view"
    onMouseOver = {collapseHandler}
    onMouseOut = {expandHandler}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        <SocialMedia />
        <h1 className="page-title">About</h1>
        <div className="about-modal">
          <Paragraph />
        </div>
      </div>
    </div>
  );
};

export default About;
