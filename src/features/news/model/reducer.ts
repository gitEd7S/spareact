import * as types from './types'
// import { ActionType } from 'typesafe-actions'
// import * as news from './actions'

interface IActionParams { type: string, payload: any }

export interface INewsTemplate {
    id: number,
    date: string,
    author: string,
    name: string,
    img: {
        url: string,
        alt: string,
    },
    description: string,
}
export interface INewsState {
    news: Array<INewsTemplate>
}

const initState: INewsState = {
    news: [
        {
            id: 1,
            date: '10.05.2020',
            author: 'Jon Garen',
            name: 'Cougar STX650 – "запитает и охладит"!',
            img: {
                url: 'https://nastroisam.ru/2014/it-technology-01.jpg',
                alt: 'Cougar STX650 – "запитает и охладит"!'
            },
            description: 'Компактный блок питания для настольных ПК, который “найдет” себя, в том числе, в мощных игровых системах. Так об этом устройстве говорит производитель. У нас была возможность посмотреть данную модель в действии, и теперь мы делимся впечатлениями.'
        },
        {
            id: 2,
            date: '10.05.2020',
            author: 'Jon Garen',
            name: 'EnerGenie EG-UPS-B650 - UPS для "маленьких"!',
            img: {
                url: 'https://www.goldsecurity.com/wp-content/uploads/2017/03/IT-security-Fake-News-1024x683.jpg',
                alt: 'EnerGenie EG-UPS-B650 - UPS для "маленьких"!'
            },
            description: 'Хотя блок питания того или иного устройства, как правило, обладает немаленьким количеством различных защит от "скачков" в электрической сети, он не может позволить безопасно выключить устройство при резком его обесточивании.'
        },
        {
            id: 3,
            date: '10.05.2020',
            author: 'Jon Garen',
            name: 'EnerGenie EG-UPS-B650 - UPS для "маленьких"!',
            img: {
                url: 'https://www.goldsecurity.com/wp-content/uploads/2017/03/IT-security-Fake-News-1024x683.jpg',
                alt: 'EnerGenie EG-UPS-B650 - UPS для "маленьких"!'
            },
            description: 'Хотя блок питания того или иного устройства, как правило, обладает немаленьким количеством различных защит от "скачков" в электрической сети, он не может позволить безопасно выключить устройство при резком его обесточивании.'
        },
        {
            id: 4,
            date: '10.05.2020',
            author: 'Jon Garen',
            name: 'EnerGenie EG-UPS-B650 - UPS для "маленьких"!',
            img: {
                url: 'https://www.goldsecurity.com/wp-content/uploads/2017/03/IT-security-Fake-News-1024x683.jpg',
                alt: 'EnerGenie EG-UPS-B650 - UPS для "маленьких"!'
            },
            description: 'Хотя блок питания того или иного устройства, как правило, обладает немаленьким количеством различных защит от "скачков" в электрической сети, он не может позволить безопасно выключить устройство при резком его обесточивании.'
        },
        {
            id: 5,
            date: '10.05.2020',
            author: 'Jon Garen',
            name: 'EnerGenie EG-UPS-B650 - UPS для "маленьких"!',
            img: {
                url: 'https://www.goldsecurity.com/wp-content/uploads/2017/03/IT-security-Fake-News-1024x683.jpg',
                alt: 'EnerGenie EG-UPS-B650 - UPS для "маленьких"!'
            },
            description: 'Хотя блок питания того или иного устройства, как правило, обладает немаленьким количеством различных защит от "скачков" в электрической сети, он не может позволить безопасно выключить устройство при резком его обесточивании.'
        },
    ]
}

export const reducer = (state = initState, action: IActionParams): INewsState => {
    const { type, payload } = action
    switch(type) {
        case types.NEWS:
            return {
                ...state,
                news: state.news.concat(payload)
            }
        default:
            return state
    }
}
