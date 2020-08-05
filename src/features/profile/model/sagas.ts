import { take, put, call, fork, select, all } from 'redux-saga/effects'
import { profileActions } from './index'

const { uploadAvatar } = profileActions

export function* sagaSetUpload(payload: string) {
    yield put(uploadAvatar(payload))
}

export function* rootSaga() {
    yield all([
        sagaSetUpload
    ])
}