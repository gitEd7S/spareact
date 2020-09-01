import * as types from './types'

interface IActionParams { type: string, payload: any }

export interface INewsTemplate {
    id: number,
    date: string,
    author: string,
    name: string,
    img: {
        url: string,
        alt: string,
    },
    description: string,
}
export interface INewsState {
    newsProfile: Array<INewsTemplate>,
    news: Array<INewsTemplate>,
}

const initState: INewsState = {
    newsProfile: [],
    news: []
}

export const reducer = (state = initState, action: IActionParams): INewsState => {
    const { type, payload } = action
    switch(type) {
        case types.NEWS_PROFILE:
            return {
                ...state,
                newsProfile: payload
            }
        case types.NEWS:
            return {
                ...state,
                news: payload
            }
        default:
            return state
    }
}
