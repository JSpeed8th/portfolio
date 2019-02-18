import React from 'react';
import './SkillContainer.css';

const SkillContainer = () => {
	const skillarray = [
	    "html-logo.jpg",
	    "css-logo.jpg",
	    "sass-logo.jpg",
	    "javascript-logo.jpg",
	    "react-logo.jpg",
	    "rails-logo.png",
	    "ruby-logo.png",
	    "resume-two-logo-LEG.png"
	 ];

	const newArray = skillarray.map((skill, index) => {
		return (
		// If resume image, apply this.
		skill === 'resume-two-logo-LEG.png' ?
	    	<a 
	    		className = 'skills'
	    		href="https://docs.google.com/document/d/1yyWKDvS-OqJKOqnuZJ874OAvofttr_whVkmjGPjGrr8/edit?usp=sharing"
              	target="_blank"
              	rel="noopener noreferrer"
	    	>
	    		<img
	    			src={require("../../../assets/images/SkillLanguages/" + skill)}
	    			alt=""
	        		key = {index}
	        		style={{backgroundColor: 'white'}}
	    		/>
	    	</a>
			:
	      <img
	        className = 'skills '
	        src={require("../../../assets/images/SkillLanguages/" + skill)}
	        alt=""
	        key = {index}
	      />
	      )
  	});
	return (
		<div className="skill-modal">
          {newArray}
        </div>
		)
}

export default SkillContainer;