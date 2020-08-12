import { Profile } from './profile'
import { Messages } from './messages'
import { News } from './news'
import { New } from './new'
import { Music } from './music'
import { Registration } from './registration'
import { Friends } from './friends'

export const routes = () => [
    { path: '/', exact: true, component: Profile },
    { path: '/registration', exact: true, component: Registration },
    { path: '/profile', exact: true, component: Profile },
    { path: '/friends', exact: true, component: Friends },
    { path: '/messages', exact: true, component: Messages },
    { path: '/music', exact: true, component: Music },
    { path: '/news', exact: true, component: News },
    { path: '/new/:newId', exact: true, component: New },
]
