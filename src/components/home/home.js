import React from "react";
import SocialMedia from "../socialmedia/socialmedia";
import ReactFooter from "../footer/footer";
import "./home.css";
import "../../containers/App.css";

const home = props => {
  return (
    <div className="home-view">
      <SocialMedia />
      <div className="home-image">
        <h1 className="page-title">Home</h1>
        <div className="home-title">
          <h1>Jordan Speed</h1>
          <p>full stack web developer</p>
        </div>
      </div>
      <ReactFooter />
    </div>
  );
};

export default home;
