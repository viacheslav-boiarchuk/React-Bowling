import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store/index';
import App from './App';
import './index.css';

ReactDOM.render(
		<Provider store={store} >
			<div className="App">
				<App />
			</div>
		</Provider>
	,
	document.getElementById('root')
);
