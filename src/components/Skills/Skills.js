import React from "react";
import SocialMedia from "../Socialmedia/Socialmedia";
import SkillContainer from './SkillContainer/SkillContainer';
import "../../Normalize.css";
import "./Skills.css";
import "../../containers/App.css";
import backgroundimage from "../../assets/images/contact.jpg";

const Skills = props => {
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
        <SkillContainer />
        </div>
      </div>
  );
};

export default Skills;
