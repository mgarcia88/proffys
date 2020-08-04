import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import TeachersList from './pages/teachers';
import TeachersForm from './pages/teachers-form';
import './assets/styles/global.css';

ReactDOM.render(
	<BrowserRouter>
	<Switch>
		<Route path="/" component={App} exact></Route>
		<Route path="/teachers-list" component={TeachersList}></Route>
		<Route path="teachers-form" component={TeachersForm}></Route>
 </Switch>
	</BrowserRouter>,
  document.getElementById('root')
);