import React from "react";
import SocialMedia from "../Socialmedia/socialmedia";
import SkillContainer from './SkillContainer/SkillContainer';
import "../../Normalize.css";
import "./skills.css";
import "../../containers/App.css";
import backgroundimage from "../../assets/images/contact.jpg";

const Skills = ({ changeRoutingHandler, route, expandPageHandler }) => {
  const style = {};
  expandPageHandler('Skills', style);

  return (
    <div className="skills view"
      style = {style}
      onClick = {() => changeRoutingHandler('Skills')}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        <SocialMedia />
        <h1 className="page-title">Skills</h1>
        <SkillContainer route = {route}/>
        </div>
      </div>
  );
};

export default Skills;
