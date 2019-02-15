import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';

import { 
    GET_TEAMS, 
    GET_TEAMS_SUCCESS, 
    GET_TEAMS_FAILURE
} from '../actions';

function* getTeams(action) {
    try {
        const response = yield call(() => axios.get("https://statsapi.web.nhl.com/api/v1/teams"));
        yield put(GET_TEAMS_SUCCESS(response.data.teams));
    } catch (err) {
        yield put(GET_TEAMS_FAILURE(err));
    }
}

const watchGetTeams = takeEvery(GET_TEAMS().type, getTeams);

export default [watchGetTeams];