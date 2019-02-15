import { handleActions } from 'redux-actions';
import { 
    GET_TEAM_ROSTER,
    GET_TEAM_ROSTER_FAILURE,
    GET_TEAM_ROSTER_SUCCESS,
    CHANGE_ACTIVE_PLAYER,
    GET_PLAYER_DATA_SUCCESS,
    CHANGE_ACTIVE_TEAM
} from './../actions';

const initialState = {
  error: false,
  loading: false,
  players: [],
  activePlayer: undefined,
  activePlayerData: {}
};

export const rosterReducer = handleActions({
    [GET_TEAM_ROSTER().type]: (state, action) => {
      return {...state, loading: true, error: false};
    },
    [GET_TEAM_ROSTER_FAILURE().type]: (state, action) => {
      return {...state, loading: false, error: true};
    },
    [GET_TEAM_ROSTER_SUCCESS().type]: (state, action) => {
        return {...state, loading: false, error: false, players: action.payload};
    },
    [CHANGE_ACTIVE_PLAYER().type]: (state, action) => {
      return {...state, activePlayer: action.payload};
    },
    [GET_PLAYER_DATA_SUCCESS().type]: (state, action) => {
      return {...state, activePlayerData: action.payload};
    },
    [CHANGE_ACTIVE_TEAM().type]: (state, action) => {
      return {...state, activePlayer: undefined, activePlayerData: {}};
    }
}, initialState);
