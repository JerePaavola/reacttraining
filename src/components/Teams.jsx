import React, { Component } from 'react';

export default class Teams extends Component {
    constructor(props) {
        super(props);
        this.state = {
            teams: []
        }
        this.getData = this.getData.bind(this);
    }

    componentWillMount() {
        //setTimeout(this.getData, 4000);
        this.getData();
    }

    getData() {
        const teams_url = "https://statsapi.web.nhl.com/api/v1/teams"

        fetch(teams_url)
            .then(data => data.json())
            .then(result => this.setState({teams: result.teams}));
    }

    render() {
        const { changeTeamCb } = this.props;

        return (
        <div className="teamscontainer">
            {this.state.teams && this.state.teams.length > 0 ? this.state.teams.map((team, index) => {
                return (
                    <div key={index} className="teamcontainer" onClick={() => changeTeamCb(team.id)}>
                        {team.name}
                    </div>
                );
            }) : <div>Fetching data</div>}
        </div>);
    }
}