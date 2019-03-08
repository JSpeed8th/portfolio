import React from "react";
import SocialMedia from "../Socialmedia/socialmedia";
import MyName from './MyName/MyName';
import "./home.css";
import "../../containers/App.css";

const Home = ({changeRoutingHandler, route}) => {
  const style = {}
  style.height = '97vh';

  return (
    <div className="home-view"
    style = {style}
    onClick = {() => changeRoutingHandler('Home')}
    >
      <SocialMedia route = {route} passedRoute = 'Home'/>
        <h1 className="page-title">Home</h1>
        <MyName route = {route}/>
    </div>
  );
};

export default Home;
