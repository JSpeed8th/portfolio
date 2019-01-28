import React from "react";
import SocialMedia from "../socialmedia/socialmedia";
import "./home.css";
import "../../containers/App.css";

const home = props => {
  const style = {}
  props.homeCollapsed ? style.display = 'block' : style.display = 'none';
  return (
    <div className="home-view" style = {style}>
      <SocialMedia />
      <div className="home-image">
        <h1 className="page-title">Home</h1>
        <div className="home-title">
          <h1>Jordan Speed</h1>
          <p>full stack web developer</p>
        </div>
      </div>
    </div>
  );
};

export default home;
