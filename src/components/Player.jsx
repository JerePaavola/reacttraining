import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_PLAYER_DATA } from '../actions';

class Player extends Component {
    
    componentWillMount() {
        if (this.props.playerId) {
            this.props.getPlayerData(this.props.playerId);
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.playerId !== this.props.playerId && nextProps.playerId) {
            this.props.getPlayerData(nextProps.playerId);
        }
    }

    render() {
        const { data } = this.props;

        return (
        <div className="playercontainer">
            {data && Object.keys(data).length > 0 ? Object.keys(data).map((key, index) => {
                if (typeof data[key] == 'object') {
                    return undefined;
                }

                return (
                    <div key={index} className="playeritemcontainer">
                        {key}: {data[key].toString()}
                    </div>
                );
            }) : <div>Fetching data</div>}
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        playerId: state.roster.activePlayer,
        data: state.roster.activePlayerData
    };
};

const mapDispatchToProps = (dispatch) => ({
    getPlayerData(playerId) {
        dispatch(GET_PLAYER_DATA(playerId));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);