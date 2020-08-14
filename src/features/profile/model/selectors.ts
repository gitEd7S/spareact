import { IProfileState } from './reducer'

interface IGetProfile { profile: IProfileState }
export const getProfile = (state: IGetProfile): IProfileState => (state.profile)
