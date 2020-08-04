import React from 'react';
import { Link } from 'react-router-dom'

import './styles.css';

const logoImg =  require("../../assets/images/logo.svg");
const backgroundImage = require('../../assets/images/landing.svg');

const studyIcon = require('../../assets/images/icons/study.svg');
const giveClassesIcon = require('../../assets/images/icons/give-classes.svg');
const purpleHeart = require('../../assets/images/icons/purple-heart.svg');

function Landing(){
	return (
	 <div id="page-landing">
			<div id="page-landing-content" className="container">
				<div className="logo-container">
					<img src={logoImg} alt="Plataforma de estudos"/>
					<h2>Sua plataforma de estudos online</h2>
				</div>

				<img src={backgroundImage} alt="Plataforma de estudos" className="hero-image"></img>

				<div className="buttons-container">
					<Link to="/teachers-list" className="study">
						<img src={studyIcon} alt="Dar aulas"></img> Estudar
					</Link>
					<Link to="/teachers-form" className="give-classes">
						<img src={giveClassesIcon} alt="Estudar"></img> Ensinar
					</Link>
				
				</div>
				<span className="total-connections">Total de 200 conexões 
						<img src={purpleHeart} alt="Purple heart"></img>
					</span>
				</div>
		</div>
	);
}

export default Landing;