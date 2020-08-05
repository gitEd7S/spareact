export const UPLOAD: string = 'avatar/UPLOAD_AVATAR'
export const EDIT_NAME: string = 'personal/EDIT_NAME'
export const EDIT_STATUS: string = 'personal/EDIT_STATUS'
export const TEST: string = 'TEST'

export interface ProfileState {
    avatar: string
    personal: {
        name: string,
        status: string,
    }
    data: any
}

export interface ProfileActionTypes {
    payload: any
    type: string
}
