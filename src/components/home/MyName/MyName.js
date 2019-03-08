import React from 'react';
import './MyName.css';

const MyName = ({ route }) => {
	const style = {
		display: 'inline-block'
	};
	route === 'Home' ? style.animationName = 'appear-and-slide-up' : style.display = 'none';
	return (
		<div className="home-title slide-duration" style = {style}>
      <h1>Jordan Speed</h1>
      <p>full stack web developer</p>
    </div>
	)
};

export default MyName;
