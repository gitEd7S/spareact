import { IProfileState } from './reducer'

type GetProfileType = { profile: IProfileState }
export const getProfile = (state: GetProfileType) => (state.profile)
