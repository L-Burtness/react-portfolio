import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart'
import WorldMap from './worldMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Lily Burtness
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
        </header>

        <body className="App-body">
          {/* <BarChart/> */}
          <WorldMap/>
        </body>
      </div>
    );
  }
}

export default App;
