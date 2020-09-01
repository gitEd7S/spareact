import * as types from './types'

interface IProfileNews { type: typeof types.WATCHER_NEWS_PROFILE }
export const newsProfileAction = (): IProfileNews => {
    return ({ type: types.WATCHER_NEWS_PROFILE })
}

interface INews { type: typeof types.WATCHER_NEWS }
export const newsAction = (): INews => {
    return ({ type: types.WATCHER_NEWS })
}