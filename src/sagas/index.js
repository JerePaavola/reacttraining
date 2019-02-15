import { all } from 'redux-saga/effects';

import teamSagas from './TeamSagas';

function* rootSaga() {
    yield all([
        ...teamSagas
    ])
}

export default rootSaga;