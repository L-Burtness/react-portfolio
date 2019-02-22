import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart'

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
          <BarChart data={[5,10,1,3]} size={[500,500]}/>
        </body>
      </div>
    );
  }
}

export default App;
