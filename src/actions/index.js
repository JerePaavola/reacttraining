import { createAction } from 'redux-actions';

export const GET_TEAMS = createAction('GET_TEAMS');
export const GET_TEAMS_SUCCESS = createAction('GET_TEAMS_SUCCESS');
export const GET_TEAMS_FAILURE = createAction('GET_TEAMS_FAILURE');

export const CHANGE_ACTIVE_TEAM = createAction('CHANGE_ACTIVE_TEAM');

export const GET_TEAM_ROSTER = createAction('GET_TEAM_ROSTER');
export const GET_TEAM_ROSTER_SUCCESS = createAction('GET_TEAM_ROSTER_SUCCESS');
export const GET_TEAM_ROSTER_FAILURE = createAction('GET_TEAM_ROSTER_FAILURE');

export const CHANGE_ACTIVE_PLAYER = createAction('CHANGE_ACTIVE_PLAYER');
