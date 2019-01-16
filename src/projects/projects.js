import React from "react";
import SocialMedia from "../socialmedia/socialmedia";
import "./projects.css";
import "../App.css";
import backgroundimage from "../images/projects.jpg";
import bakeryRecording from "../screenRecording/jordansBakery.mov";
import pokemonRecording from "../screenRecording/pokemon.mov";

const projects = props => {
  const videos = [
    {
      path: bakeryRecording,
      github: "https://github.com/JSpeed8th/Jordans-Bakery-And-Company",
      livelink: "#",
      title: "Jordan's Bakery & Company",
      description:
        'An application for, "jordan\'s bakery & company", with features including user sign-in, crud functionality, and the capability to order baked-goods.'
    },
    {
      path: pokemonRecording,
      github: "https://github.com/JSpeed8th/Pokemon-Group-Gym",
      livelink: "https://jspeed8th.github.io/Pokemon-Group-Gym/",
      title: "Pokedex App",
      description:
        'An application for, "jordan\'s bakery & company", with features including user sign-in, crud functionality, and the capability to order baked-goods.'
    }
  ];
  const videoArray = videos.map((video, index) => {
    return (
      <div className="individual-project">
        <div className="individual-project__left">
          <p className="project-title">{video.title}</p>
          <video autoPlay muted loop>
            <source src={video.path} type="video/mp4" />
          </video>
          <div className="links">
            <a href={video.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <span> / </span>
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
      <SocialMedia />
      <h1 className="page-title">Projects</h1>
      <div className="project-container">{videoArray}</div>
    </div>
  );
};

export default projects;
