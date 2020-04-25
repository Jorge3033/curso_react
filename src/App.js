import React from 'react';
import logo from '../src/assets/static/icono.jpg';
import './App.css';

import AppProducts from './components/AppProducts'
import AppProductsInput from './components/AppProductsInput'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido Jorge
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <AppProductsInput />
      <AppProducts />
    </div>
  );
}

export default App;

