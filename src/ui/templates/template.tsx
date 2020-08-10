import React from 'react'
import styled from 'styled-components'
import { Container, Header } from '../'

const Main = styled.main`
    padding-top: 40px;
`

export const Template: React.FC = ({ children }) => {
    return (
        <>
            <Header />
            <Main>
                <Container>
                    {children}
                </Container>
            </Main>
        </>
    )
}
