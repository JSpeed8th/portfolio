import React from "react";
import SocialMedia from "../socialmedia/socialmedia";
import "./about.css";
import "../../containers/App.css";
import backgroundimage from "../../assets/images/about.jpg";

const about = props => {
  return (
    <div className="about view"
    onMouseOver = {props.collapseHandler}
    onMouseOut = {props.expandHandler}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundimage})` }}
      >
        <SocialMedia />
        <h1 className="page-title">About</h1>
        <div className="about-modal">
          <p>
            Thank you for taking the time to visit my site! I was born in
            Philadelphia, PA and bred in South Jersey. I have a passion for
            visual art. So much so, that I studied Graphic Design at Rowan
            University in Glassboro, NJ. I always had an affinity for
            technology; specifically, mobile technology. I was infactuated with
            the sleek and friendly Palm Pre device that my older cousin owned
            way back when. A bit later, the original iPhone was revealed during
            a commercial break between the Academy Awards. From that very
            moment, my imagination piqued. I had to be apart of that world. How
            could anyone make something like this? I delved head first into
            learning about tech. Years later, here I am studying to become a
            software engineer. I'm grateful for my wonderful family and amazing
            fiance, Kate, who helped me get to this very moment!
          </p>
        </div>
      </div>
    </div>
  );
};

export default about;
