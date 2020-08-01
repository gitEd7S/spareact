import React from 'react'
import styled from 'styled-components'
import { Container, Header } from '../'

const Main = styled.main`
    padding-top: 40px;
`

interface Props {
    children: any
}

export const Template: React.FC<Props> = ({ children }) => {
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
