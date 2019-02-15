import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Teams from './components/Teams';
import Team from './components/Team';
import Player from './components/Player';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTeam: null,
      activePlayer: null
    }
    this.changeTeam = this.changeTeam.bind(this);
    this.changePlayer = this.changePlayer.bind(this);
  }

  changeTeam(teamId) {
    this.setState({activeTeam: teamId});
  }

  changePlayer(playerId) {
    this.setState({activePlayer: playerId});
  }

  render() {
    return (
      <div className="App">
        <div className="column column1">
          <Title title="Teams" className="title1"/>
          <Teams changeTeamCb={this.changeTeam}/>
        </div>
        <div className="column column2">
          <Title title="Players"  className="title2"/>
          <Team teamId={this.state.activeTeam} changePlayerCb={this.changePlayer}/>
        </div>
        <div className="column column3">
          <Title title="Player" className="title3"/>
          <Player playerId={this.state.activePlayer}/>
        </div>
      </div>
    );
  }
}

export default App;
