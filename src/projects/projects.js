import React from "react";
import "./projects.css";
import "../App.css";
import backgroundimage from "../images/projects.jpg";
import bakeryRecording from "../screenRecording/jordansBakery.mov";

const projects = props => {
  const videos = [{ path: bakeryRecording }];
  const videoArray = videos.map((video, index) => {
    return (
      <video autoplay muted controls key={index}>
        <source src={video.path} type="video/mp4" />
      </video>
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
