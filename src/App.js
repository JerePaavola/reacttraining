import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Teams from './components/Teams';
import Team from './components/Team';
import Player from './components/Player';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="column column1">
          <Title title="Teams" className="title1"/>
          <Teams />
        </div>
        <div className="column column2">
          <Title title="Players"  className="title2"/>
          <Team />
        </div>
        <div className="column column3">
          <Title title="Player" className="title3"/>
          <Player />
        </div>
      </div>
    );
  }
}

export default App;
