import * as types from './types'

type UploadAvatarType = { type: typeof types.WATCHER_UPLOAD, payload: string }
export const uploadAvatar = (payload: string): UploadAvatarType => ({ type: types.WATCHER_UPLOAD, payload })

type EditNameType = { type: typeof types.WATCHER_EDIT_NAME, payload: string }
export const editName = (payload: string): EditNameType => ({ type: types.WATCHER_EDIT_NAME, payload })

type EditStatusType = { type: typeof types.WATCHER_EDIT_STATUS, payload: string }
export const editStatus = (payload: string): EditStatusType => ({ type: types.WATCHER_EDIT_STATUS, payload })
