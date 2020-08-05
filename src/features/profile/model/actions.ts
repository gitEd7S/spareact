import * as types from './types'

export const uploadAvatar = (payload: string): { type: string, payload: string } => ({ type: types.UPLOAD, payload })

export const editName = (payload: string): { type: string, payload: string } => ({ type: types.EDIT_NAME, payload })

export const editStatus = (payload: string): { type: string, payload: string } => ({ type: types.EDIT_STATUS, payload })

// fetch