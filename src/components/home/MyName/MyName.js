import React from 'react';
import './MyName.css';

const MyName = ({ route }) => {
	const style = {
		display: 'block'
	};
	route === 'Home' ? style.transition = '1s' : style.display = 'none';
	return (
		<div className="home-title" style = {style}>
          <h1>Jordan Speed</h1>
          <p>full stack web developer</p>
        </div>
	)
};

export default MyName;
