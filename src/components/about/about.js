import React from "react";
import SocialMedia from "../Socialmedia/socialmedia";
import Paragraph from './Paragraph';
import "./about.css";
import "../../containers/App.css";
import backgroundimage from "../../assets/images/about.jpg";

const About = ({ changeRoutingHandler, route, expandPageHandler }) => {

  const style = {};
  const modalStyle = {};

  expandPageHandler('About', style);

  route === 'About' ? modalStyle.transition = 'inline-block' : modalStyle.display = 'none';

  return (
    <div className="about view"
      style = {style}
      onClick = {() => changeRoutingHandler('About')}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        <SocialMedia />
        <h1 className="page-title">About</h1>
        <div className="about-modal" style = {modalStyle}>
          <Paragraph />
        </div>
      </div>
    </div>
  );
};

export default About;
  
