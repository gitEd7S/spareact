import { put, takeEvery, delay, all } from 'redux-saga/effects'
import * as types from './types'

interface IUpload {
    type: string
    payload: string
}

function* watcherUpload() { yield takeEvery(types.WATCHER_UPLOAD, workerUpload) }

function* workerUpload(action: IUpload) {
    const { payload } = action
    try {
        yield delay(500)
        yield put({ type: types.UPLOAD, payload })
    } catch (error) {
        console.log(error)
    }
}

interface IEditName {
    type: string
    payload: string
}

function* watcherEditName() { yield takeEvery(types.WATCHER_EDIT_NAME, workerEditName) }

function* workerEditName(action: IEditName) {
    const { payload } = action
    try {
        yield delay(500)
        yield put({ type: types.EDIT_NAME, payload })
    } catch (error) {
        console.log(error)
    }
}

interface IEditStatus {
    type: string
    payload: string
}

function* watcherEditStatus() { yield takeEvery(types.WATCHER_EDIT_STATUS, workerEditStatus) }

function* workerEditStatus(action: IEditStatus) {
    const { payload } = action
    try {
        yield delay(500)
        yield put({ type: types.EDIT_STATUS, payload })
    } catch (error) {
        console.log(error)
    }
}

export function* sagas() {
    yield all([
        watcherUpload(),
        watcherEditName(),
        watcherEditStatus()
    ])
}