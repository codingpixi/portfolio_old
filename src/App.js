import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import Intro from './Intro.js';
import Detra from './Detra.js';

class App extends Component {
  render() {
    return (
      <div className="ContainerMain">
        <div>
          <Nav />
        </div>

        <div>
          <Intro />
        </div>

        <div>
          <p> Coming to a browser near you soon.</p>
        </div>

        <Detra />
      </div>
    );
  }
}

export default App;
