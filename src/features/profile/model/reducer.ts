import * as types from './types'

interface StateProfile {
    avatar: string
}

interface Reducer {
    payload: any
    type: string
    personal: {
        name: string,
        status: string,
    }
}

const initState = {
    avatar: 'https://u-recruit.com.ua/wp-content/uploads/2018/06/SENIOR-FRONT-END-WEB-DEVELOPER-1.jpg',
    personal: {
        name: 'Первый аноним',
        status: 'Все буде круто, нужно только поднажать'
    }
} as StateProfile

export const reducer = (state = initState, action: Reducer) => {
    const { payload, type } = action
    switch(type) {
        case types.UPLOAD:
            return {
                ...state,
                avatar: payload
            }
        default:
            return state
    }
}
