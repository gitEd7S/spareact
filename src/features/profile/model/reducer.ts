import * as types from './types'

type ActionParamsType = { type: string, payload: string }

export interface IProfileState {
    avatar: string
    name: string,
    status: string,
}

const initState: IProfileState = {
    avatar: 'https://u-recruit.com.ua/wp-content/uploads/2018/06/SENIOR-FRONT-END-WEB-DEVELOPER-1.jpg',
    name: 'Первый аноним',
    status: 'Все буде круто, нужно только поднажать'
}

export const reducer = (state = initState, action: ActionParamsType) => {
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
