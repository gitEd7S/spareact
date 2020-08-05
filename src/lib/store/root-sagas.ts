import { fork } from 'redux-saga/effects'
import { profileSagas } from '../../features/profile/model'

const { sagaSetTest } = profileSagas

export function* rootSaga() {
    yield fork(sagaSetTest)
}
