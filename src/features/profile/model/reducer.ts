import * as types from './types'

const initState = {
    img: 'https://u-recruit.com.ua/wp-content/uploads/2018/06/SENIOR-FRONT-END-WEB-DEVELOPER-1.jpg'
}

export const reducer = (state = initState, action: any) => {
    const { payload, type } = action
    switch(type) {
        case types.UPLOAD:
            return state

        default:
            return state
    }
}
