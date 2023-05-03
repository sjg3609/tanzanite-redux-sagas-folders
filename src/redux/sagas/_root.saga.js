import { all } from 'redux-saga/effects';
import elementSaga from './element.saga.js';

//  our rootSaga bundles all other sagas together

export default function* rootSaga() {
    yield all([
        elementSaga(),
        // Other sagas would go here
    ]);
}