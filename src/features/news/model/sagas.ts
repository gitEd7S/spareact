import { put, takeEvery, delay, call, all } from 'redux-saga/effects'
import * as types from './types'

/*
    @ Нужно количество указать
    @ Сделать один слушатель на страницу Profile или общий ?
*/

function* watcherNews() { yield takeEvery(types.WATCHER_NEWS, workerNews) }

function* workerNews() {
    try {
        const news = call(fetchNews)
        yield put({ type: types.NEWS, news })
    } catch (error) {
        console.log(error)
    }
}

function* fetchNews() {
    yield delay(500)
}

export function* sagas() {
    yield all([
        watcherNews()
    ])
}