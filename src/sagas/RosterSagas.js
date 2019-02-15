import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';

import { 
    GET_TEAM_ROSTER, 
    GET_TEAM_ROSTER_SUCCESS, 
    GET_TEAM_ROSTER_FAILURE
} from '../actions';

function* getTeamRoster(action) {
    try {
        const response = yield call(() => axios.get(`https://statsapi.web.nhl.com/api/v1/teams/${action.payload}/roster`));
        yield put(GET_TEAM_ROSTER_SUCCESS(response.data.roster));
    } catch (err) {
        yield put(GET_TEAM_ROSTER_FAILURE(err));
    }
}

const watchGetTeamRoster = takeEvery(GET_TEAM_ROSTER().type, getTeamRoster);

export default [watchGetTeamRoster];