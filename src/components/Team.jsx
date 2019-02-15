import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'

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
        const { players, loading } = this.props;

        const loadingItem = !loading ? <div>Please select the team</div> : <Loader type="Hearts" color="red" height={80} width={80} />; 

        return (
        <div className="rostercontainer">
            {players && players.length > 0 ? players.map((player, index) => {
                return (
                    <div key={index} className="rosterplayercontainer" onClick={() => this.props.changeActivePlayer(player.person.id)}>
                        {player.person.fullName}
                    </div>
                );
            }) : loadingItem}
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        teamId: state.teams.activeTeam,
        players: state.roster.players,
        loading:  state.roster.loading,
        error:  state.roster.error
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