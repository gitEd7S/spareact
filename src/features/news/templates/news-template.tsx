import React from 'react'
import styled from 'styled-components'

const Title = styled.h3`
    display: block;
    width: 100%;
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
`

export const NewsTemplate: React.FC = () => {
    return (
        <>
            <Title>Новости</Title>
        </>
    )
}
