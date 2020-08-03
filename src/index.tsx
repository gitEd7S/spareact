import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './lib/store'
import { BrowserRouter } from 'react-router-dom'

import { App } from './App'

declare global {
    interface Window {
        store: any
    }
}

window.store = store

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
)
