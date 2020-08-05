import { put, call } from 'redux-saga/effects'
import { profileActions } from './index'

const { test } = profileActions

export function* sagaSetTest() {
    const payload = yield call(fetchTest)
    yield put(test(payload))
}

async function fetchTest() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    return response.json()
}
