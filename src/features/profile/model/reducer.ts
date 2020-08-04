import * as types from './types'

const initState: types.ProfileState = {
    avatar: 'https://u-recruit.com.ua/wp-content/uploads/2018/06/SENIOR-FRONT-END-WEB-DEVELOPER-1.jpg',
    personal: {
        name: 'Первый аноним',
        status: 'Все буде круто, нужно только поднажать'
    }
}

export const reducer = (state = initState, action: types.ProfileActionTypes) => {
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
                personal: {
                    name: payload,
                    status: state.personal.status
                }
            }
        case types.EDIT_STATUS:
            return {
                ...state,
                personal: {
                    name: state.personal.name,
                    status: payload
                }
            }
        default:
            return state
    }
}
