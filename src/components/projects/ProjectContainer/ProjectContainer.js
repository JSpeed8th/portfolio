import React from 'react';
import './ProjectContainer.css';
import bakeryRecording from "../../../assets/screenRecording/jordansBakery.mov";
import pokemonRecording from "../../../assets/screenRecording/pokemon.mov";
import tastebudsRecording from "../../../assets/screenRecording/tastebuds.mov";
import smartBrainRecording from '../../../assets/screenRecording/smart-brain.mov';

const ProjectContainer = ({ route }) => {
	// Array of project details
	const videos = [
	    {
	      path: bakeryRecording,
	      github: "https://github.com/JSpeed8th/Jordans-Bakery-And-Company",
	      livelink: "https://jordans-bakery-and-company.herokuapp.com/",
	      title: "Jordan's Bakery & Company",
	      description:
	        'An application for, "jordan\'s bakery & company" which includes CRUD functionality and the ability to order bakes. Built in Ruby, Rails, & SQLite.'
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
	        "Pokedex app showcases individual Pokemon’s statistics upon user request. Pokedex was built in Ruby, Rails, and SQLite."
	    },
	    {
	      path: tastebudsRecording,
	      github: "https://github.com/JSpeed8th/Pokemon-Group-Gym",
	      livelink: "https://jordansrumblr.herokuapp.com ",
	      title: "Taste Buds",
	      description:
	        "A social networking site for bakers to share their recipes. Built in Ruby, Rails, & SQLite."
	    }
	  ];

	const videoArray = videos.map((video, index) => {
	    return (
	      	<div className="individual-project" key = {index}>
		        <div className="individual-project__left">
		          <p className="project-title">{video.title}</p>
		          <video muted autoPlay loop>
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
		        <div className="individual-project__description">
		          <p>{video.description}</p>
		        </div>
	      	</div>
	    );
	 });

	const style = {
		display: 'flex'
	};
	route === 'Projects' ? style.animationName = 'appear-and-slide-up' : style.display = 'none';
	return (
		<div className="project-container center" style = {style}>
			{videoArray}
		</div>
		)
}

export default ProjectContainer;
