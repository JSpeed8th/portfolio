import React from "react";
import SocialMedia from "../socialmedia/socialmedia";
import ProjectContainer from './ProjectContainer/ProjectContainer';
import "./Projects.css";
import "../../containers/App.css";
import backgroundimage from "../../assets/images/projects.jpg";

const Projects = props => {
  return (
    <div className="projects view"
    onMouseOver = {props.collapseHandler}
    onMouseOut = {props.expandHandler}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        <SocialMedia />
        <h1 className="page-title">Projects</h1>
        <ProjectContainer />
      </div>
    </div>
  );
};

export default Projects;
