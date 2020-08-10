import React from 'react'
import styled from 'styled-components'
import { New } from '../'

const ListNews = styled.div`
    width: 100%;
`

const Title = styled.h3`
    display: block;
    width: 100%;
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 600;
`

export const ProfileTemplate: React.FC = () => {
    return (
        <>
            <Title>Последние новости</Title>
            <ListNews>
                <New />
            </ListNews>
        </>
    )
}