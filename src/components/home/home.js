import React from "react";
import SocialMedia from "../Socialmedia/Socialmedia";
import MyName from './MyName/MyName';
import "./Home.css";
import "../../containers/App.css";

const Home = ({ homeCollapsed }) => {
  const style = {}
  homeCollapsed ? style.height = '97vh' : style.height = '0px';
  return (
    <div className="home-view" style = {style}>
      <SocialMedia />
      <div className="home-image">
        <h1 className="page-title">Home</h1>
        <MyName />
      </div>
    </div>
  );
};

export default Home;
