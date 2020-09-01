import { put, takeEvery, delay, all } from 'redux-saga/effects'
import { fetchProfileNews, fetchNews } from './../../../api/news'
import * as types from './types'

function* watcherNewsProfile() { yield takeEvery(types.WATCHER_NEWS_PROFILE, workerNewsProfile) }

function* workerNewsProfile() {
    yield delay(500)
    try {
        const news = yield fetchProfileNews()
        yield put({ type: types.NEWS_PROFILE, payload: news })
    } catch (error) {
        console.log(error)
    }
}

function* watcherNews() { yield takeEvery(types.WATCHER_NEWS, workerNews) }

function* workerNews() {
    yield delay(500)
    try {
        const news = yield fetchNews()
        yield put({ type: types.NEWS, payload: news })
    } catch (error) {
        console.log(error)
    }
}

export function* sagas() {
    yield all([
        watcherNewsProfile(),
        watcherNews()
    ])
}