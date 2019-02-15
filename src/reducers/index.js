import { combineReducers } from 'redux'

import {teamReducer} from './TeamReducer';

const rootReducer = combineReducers({
  teams: teamReducer
})

export default rootReducer
