import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_TEAM_ROSTER, CHANGE_ACTIVE_PLAYER } from '../actions';

class Team extends Component {
    
    componentWillMount() {
        if (this.props.teamId) {
            this.props.getTeamRoster(this.props.teamId);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.teamId !== this.props.teamId) {
            this.props.getTeamRoster(nextProps.teamId);
        }
    }

    render() {
        const { players } = this.props;

        return (
        <div className="rostercontainer">
            {players && players.length > 0 ? players.map((player, index) => {
                return (
                    <div key={index} className="rosterplayercontainer" onClick={() => this.props.changeActivePlayer(player.person.id)}>
                        {player.person.fullName}
                    </div>
                );
            }) : <div>Fetching data</div>}
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        teamId: state.teams.activeTeam,
        players: state.roster.players
    };
};

const mapDispatchToProps = (dispatch) => ({
    getTeamRoster(teamId) {
        dispatch(GET_TEAM_ROSTER(teamId));
    },
    changeActivePlayer(playerId) {
        dispatch(CHANGE_ACTIVE_PLAYER(playerId));
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(Team);