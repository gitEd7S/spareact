import * as types from './types'
import { INewsTemplate } from './reducer'

interface INews {
    type: typeof types.WATCHER_NEWS,
    payload: Array<INewsTemplate>
}
export const news = (payload: Array<INewsTemplate>): INews => ({ type: types.WATCHER_NEWS, payload })
