import React from "react";
import "./socialmedia.css";

const socialmedia = () => {
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
    }
  ];

  const newArray = socialMediaArray.map((platform, index) => {
    return (
      <a
        href={platform.link}
        target="_blank"
        rel="noopener noreferrer"
        key={index}
      >
        <ion-icon name={platform.name} />
      </a>
    );
  });

  return <div className="icons hover-effect">{newArray}</div>;
};

export default socialmedia;
