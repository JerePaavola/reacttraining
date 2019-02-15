import { combineReducers } from 'redux'

import { teamReducer } from './TeamReducer';
import { rosterReducer } from './RosterReducer';

const rootReducer = combineReducers({
  teams: teamReducer,
  roster: rosterReducer
})

export default rootReducer
