import { put, takeEvery, delay, all } from 'redux-saga/effects'
import * as types from './types'

function* watcherUpload() { yield takeEvery(types.WATCHER_UPLOAD, workerUpload) }

function* workerUpload({ payload }: { type: string, payload: string }) {
    yield delay(500)
    yield put({ type: types.UPLOAD, payload })
}

function* watcherEditName() { yield takeEvery(types.WATCHER_EDIT_NAME, workerEditName) }

function* workerEditName({ payload }: { type: string, payload: string }) {
    yield delay(500)
    yield put({ type: types.EDIT_NAME, payload })
}

function* watcherEditStatus() { yield takeEvery(types.WATCHER_EDIT_STATUS, workerEditStatus) }

function* workerEditStatus({ payload }: { type: string, payload: string }) {
    yield delay(500)
    yield put({ type: types.EDIT_STATUS, payload })
}

export function* sagas() {
    yield all([
        watcherUpload(),
        watcherEditName(),
        watcherEditStatus()
    ])
}