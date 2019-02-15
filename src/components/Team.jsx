import React, { Component } from 'react';
import { connect } from 'react-redux';

class Team extends Component {
    constructor(props) {
        super(props);
        this.state = {
            players: []
        }
        this.getData = this.getData.bind(this);
    }

    componentWillMount() {
        this.getData(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.teamId !== this.props.teamId) {
            this.getData(nextProps);
        }
    }

    getData(props) {
        if (props.teamId) {
            const url = `https://statsapi.web.nhl.com/api/v1/teams/${props.teamId}/roster`

            fetch(url)
                .then(data => data.json())
                .then(result => this.setState({players: result.roster}));
        }
    }

    render() {
        const { changePlayerCb } = this.props;

        return (
        <div className="rostercontainer">
            {this.state.players && this.state.players.length > 0 ? this.state.players.map((player, index) => {
                return (
                    <div key={index} className="rosterplayercontainer" onClick={() => changePlayerCb(player.person.id)}>
                        {player.person.fullName}
                    </div>
                );
            }) : <div>Fetching data</div>}
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        teamId: state.teams.activeTeam
    };
};

export default connect(mapStateToProps, undefined)(Team);