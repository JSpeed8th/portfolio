import React from "react";
import SocialMedia from "../socialmedia/socialmedia";
import "./home.css";
import "../App.css";
import backgroundimage from "../images/home.jpg";

const home = props => {
  return (
    <div className="home-view">
      <SocialMedia />
      <img className="home-image" src={backgroundimage} />
      <h1 className="page-title">Home</h1>
      <div className="home-title">
        <h1>Jordan Speed</h1>
        <p>full stack web developer</p>
      </div>
    </div>
  );
};

export default home;
