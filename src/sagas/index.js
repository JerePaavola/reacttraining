import { all } from 'redux-saga/effects';

import teamSagas from './TeamSagas';
import rosterSagas from './RosterSagas';

function* rootSaga() {
    yield all([
        ...teamSagas,
        ...rosterSagas
    ])
}

export default rootSaga;