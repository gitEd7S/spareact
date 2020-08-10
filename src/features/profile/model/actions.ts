import * as types from './types'

export const uploadAvatar = (payload: string): types.ActionParams => ({ type: types.WATCHER_UPLOAD, payload })
export const editName = (payload: string): types.ActionParams => ({ type: types.WATCHER_EDIT_NAME, payload })
export const editStatus = (payload: string): types.ActionParams => ({ type: types.WATCHER_EDIT_STATUS, payload })
