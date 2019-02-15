import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner'

import {GET_TEAMS, CHANGE_ACTIVE_TEAM} from './../actions';

class Teams extends Component {

    componentWillMount() {
        this.props.getTeams();
    }

    render() {
        const { teams, loading, error } = this.props;

        if (error) {
            return <div className="error">Getting data failed</div>
        }

        return (
        <div className="teamscontainer">
            {!loading ? teams.map((team, index) => {
                return (
                    <div key={index} className="teamcontainer" onClick={() => this.props.changeActiveTeam(team.id)}>
                        {team.name}
                    </div>
                );
            }) : <Loader type="Hearts" color="red" height={80} width={80} />}
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        teams: state.teams.teams,
        loading:  state.teams.loading,
        error:  state.teams.error
    };
};

const mapDispatchToProps = (dispatch) => ({
    getTeams() {
        dispatch(GET_TEAMS());
    },
    changeActiveTeam(id) {
        dispatch(CHANGE_ACTIVE_TEAM(id));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Teams);