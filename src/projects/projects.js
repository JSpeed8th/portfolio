import React from "react";
import "./projects.css";
import "../App.css";
import backgroundimage from "../images/projects.jpg";
import bakeryRecording from "../screenRecording/jordansBakery.mov";

const projects = props => {
  const videos = [
    {
      path: bakeryRecording,
      github: "https://github.com/JSpeed8th/portfolio",
      livelink: "#",
      title: "Jordan's Bakery & Company",
      description:
        'An application for, "jordan\'s bakery & company", with features including user sign-in, crud functionality, and the capability to order baked-goods.'
    }
  ];
  const videoArray = videos.map((video, index) => {
    {
      video.key = index;
    }
    return (
      <div className="individual-project">
        <div className="individual-project__left">
          <video autoPlay muted replay="true" controls>
            <source src={video.path} type="video/mp4" />
          </video>
          <div className="links">
            <p className="project-title">{video.title}</p>
            <a href={video.github} target="_blank">
              GitHub
            </a>
            <span>/</span>
            <a href={video.livelink}>Live Link </a>
          </div>
        </div>
        <div className="individual-project__right">
          <p>{video.description}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="projects view">
      <img className="background-image" src={backgroundimage} />
      <h1 className="page-title">Projects</h1>
      <div className="project-container">{videoArray}</div>
    </div>
  );
};

export default projects;
