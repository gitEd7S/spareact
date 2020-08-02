import * as types from './types'

export const upload = (payload: any) => { type: types.UPLOAD, payload }

export const setUpload = (payload: any) => async (dispatch: any) => {
    setTimeout(() => { dispatch(upload(payload)) }, 1000)
}
