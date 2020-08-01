import { Profile } from './profile'
import { Messages } from './messages'
import { News } from './news'
import { Music } from './music'

export const routes = () => [
    { path: '/', exact: true, component: Profile },
    { path: '/profile', exact: true, component: Profile },
    { path: '/messages', exact: true, component: Messages },
    { path: '/news', exact: true, component: News },
    { path: '/music', exact: true, component: Music },
]
