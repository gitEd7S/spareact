import * as types from './types'

interface IUploadAvatar { type: typeof types.WATCHER_UPLOAD, payload: string }
export const uploadAvatar = (payload: string): IUploadAvatar => ({ type: types.WATCHER_UPLOAD, payload })

interface IEditName { type: typeof types.WATCHER_EDIT_NAME, payload: string }
export const editName = (payload: string): IEditName => ({ type: types.WATCHER_EDIT_NAME, payload })

interface IEditStatus { type: typeof types.WATCHER_EDIT_STATUS, payload: string }
export const editStatus = (payload: string): IEditStatus => ({ type: types.WATCHER_EDIT_STATUS, payload })
