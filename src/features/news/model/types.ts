export const [NEWS, WATCHER_NEWS] = ['news/NEWS', 'news/WATCHER_NEWS']

export interface NewsState {
    news: [
        {
            id: number,
            date: string,
            author: string,
            title: string,
            image: string,
            description: string,
        }
    ]
}
