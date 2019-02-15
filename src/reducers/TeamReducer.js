import { handleActions } from 'redux-actions';
import { 
    GET_TEAMS,
    GET_TEAMS_FAILURE, 
    GET_TEAMS_SUCCESS
} from './../actions';

const initialState = {
  error: false,
  loading: false,
  teams: []
};

export const teamReducer = handleActions({
    [GET_TEAMS().type]: (state, action) => {
      return {...state, loading: true, error: false};
    },
    [GET_TEAMS_FAILURE().type]: (state, action) => {
      return {...state, loading: false, error: true};
    },
    [GET_TEAMS_SUCCESS().type]: (state, action) => {
        return {loading: false, error: false, teams: action.payload};
    },
}, initialState);
