import { INewsState, INewsTemplate } from './reducer'

interface IGetNews { news: INewsState }
export const getNews = (state: IGetNews): Array<INewsTemplate> => (state.news.news)
