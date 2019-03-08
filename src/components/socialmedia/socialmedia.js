import React from "react";
import "./socialmedia.css";

const Socialmedia = ({ route, passedRoute }) => {
  // Array Containing My Social Media Handles
  const socialMediaArray = [
    { link: "https://github.com/JSpeed8th", name: "logo-github" },
    { link: "https://www.facebook.com/jordanspeed8", name: "logo-facebook" },
    {
      link: "https://www.linkedin.com/in/jordan-speed/",
      name: "logo-linkedin"
    },
    {
      link: "https://www.instagram.com/art_angel_ichi/",
      name: "logo-instagram"
    },
    {
      link: "mailto:jspeed8th@gmail.com",
      name: "mail"
    }
  ];

  const style = {};

  passedRoute === route ? style.display = 'inline-block' : style.display = 'none';

  // Mapping JSX To Each Item Within Array
  const newArray = socialMediaArray.map((platform, index) => {
    return (
      <a
        href={platform.link}
        target="_blank"
        rel="noopener noreferrer"
        key={index}
      >
        <ion-icon name={platform.name} style = {style}/>
      </a>
    );
  });

  // Returning New Array With Mapped JSX
  return <div className="icons hover-effect">
  {newArray}
  </div>;
};

export default Socialmedia;
