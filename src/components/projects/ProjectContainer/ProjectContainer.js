import React from 'react';
import bakeryRecording from "../../../assets/screenRecording/jordansBakery.mov";
import pokemonRecording from "../../../assets/screenRecording/pokemon.mov";
import tastebudsRecording from "../../../assets/screenRecording/tastebuds.mov";
import smartBrainRecording from '../../../assets/screenRecording/smart-brain.mov';

const ProjectContainer = () => {
	// Array of project details
	const videos = [
	    {
	      path: bakeryRecording,
	      github: "https://github.com/JSpeed8th/Jordans-Bakery-And-Company",
	      livelink: "https://jordans-bakery-and-company.herokuapp.com/",
	      title: "Jordan's Bakery & Company",
	      description:
	        'An application for, "jordan\'s bakery & company", with features including user sign-in, crud functionality, and the capability to order baked-goods.'
	    },
	    {
	      path: smartBrainRecording,
	      github: "https://github.com/JSpeed8th/smart-brain",
	      livelink: "https://smart-facial-detect.herokuapp.com/",
	      title: "Smart Brain",
	      description:
	        "A fun facial detection application built in React, Node.js, Express.js, & PostgresSQL."
	    },
	    {
	      path: pokemonRecording,
	      github: "https://github.com/JSpeed8th/Pokemon-Group-Gym",
	      livelink: "https://jspeed8th.github.io/Pokemon-Group-Gym/",
	      title: "Pokedex App",
	      description:
	        "Pokedex app showcases individual Pokemon’s statistics upon user request. This project is focused on client side technology."
	    },
	    {
	      path: tastebudsRecording,
	      github: "https://github.com/JSpeed8th/Pokemon-Group-Gym",
	      livelink: "https://jordansrumblr.herokuapp.com ",
	      title: "Taste Buds",
	      description:
	        "A Tumblr clone geared towards bakers so that they can share recipes and comment on one another's work. This project is written in rails."
	    }
	  ];

	const videoArray = videos.map((video, index) => {
	    return (
	      	<div className="individual-project">
		        <div className="individual-project__left">
		          <p className="project-title">{video.title}</p>
		          <video muted controls>
		            <source src={video.path} type="video/mp4" />
		          </video>
		          <div className="links">
		            <a href={video.github} target="_blank" rel="noopener noreferrer">
		              GitHub
		            </a>
		            <span> / </span>
		            <a href={video.livelink} target="_blank" rel="noopener noreferrer">
		              Live Link{" "}
		            </a>
		          </div>
		        </div>
		        <div className="individual-project__right">
		          <p>{video.description}</p>
		        </div>
	      	</div>
	    );
	 });

	return (
		<div className="project-container">
			{videoArray}
		</div>
		)
}

export default ProjectContainer;