import { combineReducers } from 'redux'
import { profileReducer } from '../../features/profile/model'
import { newsReducer } from '../../features/news/model'

export const rootReducers = combineReducers({
    profile: profileReducer,
    news: newsReducer
})
