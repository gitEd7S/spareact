import { INewsState } from './reducer'

type TGetNews = { news: INewsState }
export const getNews = (state: TGetNews) => (state.news.news)
