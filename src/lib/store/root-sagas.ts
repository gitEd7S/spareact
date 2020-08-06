import { all } from 'redux-saga/effects'
import { profileSagas } from '../../features/profile/model'

export function* rootSaga() {
    yield all([
        profileSagas()
    ])
}
