import { all } from 'redux-saga/effects'
import { profileSagas } from '../../features/profile/model'
import { newsSagas } from '../../features/news/model'

export function* rootSaga() {
    yield all([
        profileSagas(),
        newsSagas()
    ])
}
