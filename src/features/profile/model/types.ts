export const [UPLOAD, WATCHER_UPLOAD] = ['avatar/UPLOAD_AVATAR', 'avatar/UPLOAD_AVATAR/WATCHER_UPLOAD']
export const [EDIT_NAME, WATCHER_EDIT_NAME] = ['personal/EDIT_NAME', 'personal/EDIT_NAME/WATCHER_EDIT_NAME']
export const [EDIT_STATUS, WATCHER_EDIT_STATUS] = ['personal/EDIT_STATUS', 'personal/EDIT_NAME/WATCHER_EDIT_STATUS']

export interface ProfileState {
    avatar: string
    name: string,
    status: string,
}

export interface ProfileActionTypes {
    payload: string
    type: string
}
