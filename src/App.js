import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import Intro from './Intro.js';

class App extends Component {
  render() {
    return (
      <div className="Box1">
        <div>
          <Nav />
        </div>

        <div>
          <Intro />
        </div>

        <div>
          <p> Coming to a browser near you soon.</p>
        </div>
      </div>
    );
  }
}

export default App;
