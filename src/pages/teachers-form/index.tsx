import React from 'react';
import Header from '../../components/header';

import './styles.css';

function TeachersForm() {
	return (
		<div className="container" id="page-teacher-form">
			<Header title="Que bom que voce quer dar aula" />

			<form id="form-insert">
				<div className="input-block">
					<label htmlFor="subject">Matéria</label>
					<input type="text" id="subject"></input>
				</div>

				<div className="input-block">
					<label htmlFor="name">Nome</label>
					<input type="text" id="name"></input>
				</div>

				<div className="input-block">
					<label htmlFor="phone">Telefone de contato</label>
					<input type="phone" id="phone"></input>
				</div>
			</form>
		</div>
	);
}

export default TeachersForm;