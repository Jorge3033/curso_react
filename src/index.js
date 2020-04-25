import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


//import App from '../src/container/App';
//ReactDOM.render(<App />, document.getElementById('root'));

//import Register from '../src/container/Register';
//ReactDOM.render(<Register />, document.getElementById('root'));

//import Login from '../src/container/Login';
//ReactDOM.render(<Login />, document.getElementById('root'));

//import App from '../src/container/App';
//ReactDOM.render(<App />, document.getElementById('root'));

//import Carrusel from './components/Carrusel';
//ReactDOM.render(<Carrusel />, document.getElementById('root'));

//import Footer from './components/Footer';
//ReactDOM.render(<Footer />, document.getElementById('root'));

//import Header from './components/Header';
//ReactDOM.render(<Header />, document.getElementById('root'));

//import Search from './components/Search';
//ReactDOM.render(<Search />, document.getElementById('root'));

//import Button from './components/Button';
//ReactDOM.render(<Button />, document.getElementById('root'));

//import Stateful from './components/Stateful';
//ReactDOM.render(<Stateful />,document.getElementById('root'));

//import holamundo from './components/holamundo';
//ReactDOM.render(<holamundo />, document.getElementById('root'));

import App from './App';
ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

