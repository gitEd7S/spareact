import * as types from './types'

interface ProfileState {
    avatar: string
    name: string,
    status: string,
}

interface ProfileActionTypes {
    payload: string
    type: string
}

const initState: ProfileState = {
    avatar: 'https://u-recruit.com.ua/wp-content/uploads/2018/06/SENIOR-FRONT-END-WEB-DEVELOPER-1.jpg',
    name: 'Первый аноним',
    status: 'Все буде круто, нужно только поднажать'
}

export const reducer = (state = initState, action: ProfileActionTypes) => {
    const { payload, type } = action
    switch(type) {
        case types.UPLOAD:
            return {
                ...state,
                avatar: payload
            }
        case types.EDIT_NAME:
            return {
                ...state,
                name: payload,
            }
        case types.EDIT_STATUS:
            return {
                ...state,
                status: payload
            }
        default:
            return state
    }
}
