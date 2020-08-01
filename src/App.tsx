import React from 'react'
import { Routes } from './routes'
import { GlobalStyles } from './global-styles'
import { Normalize } from './normalize'

export const App = () => {
    return (
        <>
            <Normalize />
            <GlobalStyles />
            <Routes />
        </>
    )
}
