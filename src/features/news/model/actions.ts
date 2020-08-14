import * as types from './types'
import { NewsStateType } from './reducer'

type NewsType = { type: typeof types.WATCHER_NEWS, payload: Array<NewsStateType> }
export const news = (payload: Array<NewsStateType>): NewsType => ({ type: types.WATCHER_NEWS, payload })
