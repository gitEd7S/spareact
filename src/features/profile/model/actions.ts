import * as types from './types'

interface returnAction {
    type: string
    payload: string
}

export const setUpload = (payload: string): returnAction => ({ type: types.UPLOAD, payload })

export const setEditName = (payload: string): returnAction => ({ type: types.EDIT_NAME, payload })

export const setEditStatus = (payload: string): returnAction => ({ type: types.EDIT_STATUS, payload })
