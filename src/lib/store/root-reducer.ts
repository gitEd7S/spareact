import { combineReducers } from 'redux'
import { profileReducer } from '../../features/profile/model'

export const rootReducers = combineReducers({
    profile: profileReducer
})
