export const [UPLOAD, WATCHER_UPLOAD]: string[] = ['avatar/UPLOAD_AVATAR', 'avatar/UPLOAD_AVATAR/WATCHER_UPLOAD']
export const [EDIT_NAME, WATCHER_EDIT_NAME]: string[] = ['personal/EDIT_NAME', 'personal/EDIT_NAME/WATCHER_EDIT_NAME']
export const [EDIT_STATUS, WATCHER_EDIT_STATUS]: string[] = ['personal/EDIT_STATUS', 'personal/EDIT_NAME/WATCHER_EDIT_STATUS']

type Payload = string | number | object

export type ActionParams = { type: string, payload: Payload }

export interface ProfileState {
    avatar: string
    name: string,
    status: string,
}
