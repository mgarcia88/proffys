import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const backIcon = require('../../assets/images/icons/back.svg');
const logoImg =  require("../../assets/images/logo.svg");

interface IPageHeaderProps{
 title: string;
}

const Header: React.FC<IPageHeaderProps> = (propos) => {
	 return (
			<header className="page-header">
			<div className="top-bar-container">
				<Link to="/">
					<img src={ backIcon } alt="Voltar"></img>
				</Link>
				<img src={ logoImg } alt="Logo"></img>
			</div>
			<div className="header-content">
		  <strong>{ propos.title }</strong>
				{propos.children}
			</div>
			
		</header>
		);
}

export default Header;