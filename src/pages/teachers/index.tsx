import React from 'react';
import './styles.css';
import Header from '../../components/header';

const whatsappicon =  require("../../assets/images/icons/whatsapp.svg");

function TeachersList(){
	return (
			<div className="container" id="page-teacher-list">
					<Header title="Estes são os proffys disponíveis">
					<form id="search-teachers">
							<div className="input-block">
								<label htmlFor="subject">Matéria</label>
								<input type="text" id="subject"></input>
							</div>

							<div className="input-block">
								<label htmlFor="weekday">Dia da semana</label>
								<input type="text" id="weekday"></input>
							</div>

							<div className="input-block">
								<label htmlFor="time">Hora</label>
								<input type="text" id="time"></input>
							</div>
						</form>
				</Header>

				<main className="teacher-item">
					<article>
						<header>
							<img src='https://avatars2.githubusercontent.com/u/18174474?s=60&v=4' alt="avatar"></img>
							<div>
								<strong>Maiara Garcia</strong>
								<span>Matemática</span>
							</div>
						</header>
						<p>
							Professora mais maravilhosa do mundo
						</p>
						<footer>
							<p>
								Preço/Hora: 
								<strong> R$ 80,00</strong>
							</p>
							<button type="button">
								<img src={whatsappicon} alt="Whatsapp"></img>
								Entre em contato
							</button>
						</footer>
					</article>
				</main>

				<main className="teacher-item">
					<article>
						<header>
							<img src='https://avatars2.githubusercontent.com/u/18174474?s=60&v=4' alt="avatar"></img>
							<div>
								<strong>Valter jr</strong>
								<span>Redes de computadores</span>
							</div>
						</header>
						<p>
							Professor mais maravilhoso do mundo
						</p>
						<footer>
							<p>
								Preço/Hora: 
								<strong> R$ 180,00</strong>
							</p>
							<button type="button">
								<img src={whatsappicon} alt="Whatsapp"></img>
								Entre em contato
							</button>
						</footer>
					</article>
				</main>
			</div>

	);
}

export default TeachersList;