import React from "react";
import "./projects.css";
import "../App.css";
import backgroundimage from "../images/projects.jpg";

const projects = props => {
  return (
    <div className="projects view">
      <img className="background-image" src={backgroundimage} />
      <h1 className="page-title">Projects</h1>
      <div className="project-container" />
    </div>
  );
};

export default projects;
