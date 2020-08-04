import * as types from './types'

export const setUpload = (payload: string): { type: string, payload: string } => ({ type: types.UPLOAD, payload })

export const setEditName = (payload: string): { type: string, payload: string } => ({ type: types.EDIT_NAME, payload })

export const setEditStatus = (payload: string): { type: string, payload: string } => ({ type: types.EDIT_STATUS, payload })
