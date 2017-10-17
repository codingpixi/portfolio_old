import React, { Component } from 'react';
import logo from './logo.svg';
// import  {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
import './App.css';
import Nav from './Nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
          <Nav />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
