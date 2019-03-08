import React from "react";
import SocialMedia from "../Socialmedia/socialmedia";
import ProjectContainer from './ProjectContainer/ProjectContainer';
import "./projects.css";
import "../../containers/App.css";
import backgroundimage from "../../assets/images/projects.jpg";

const Projects = ({ changeRoutingHandler, skills, route, expandPageHandler }) => {
    const style = {};
  expandPageHandler('Projects', style);

  return (
    <div className="projects view"
      style = {style}
      onClick = {() => changeRoutingHandler('Projects')}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        <SocialMedia route = {route} passedRoute = 'Projects'/>
        <h1 className="page-title">Projects</h1>
        <ProjectContainer route = {route}/>
      </div>
    </div>
  );
};

export default Projects;
