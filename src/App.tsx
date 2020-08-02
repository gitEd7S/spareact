import React from 'react'
import { Routes } from './routes'
import { GlobalStyles } from './global-styles'
import { Normalize } from './normalize'
import { Font } from './ui'

export const App = () => {
    return (
        <>
            <Font />
            <Normalize />
            <GlobalStyles />
            <Routes />
        </>
    )
}
