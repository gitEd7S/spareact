import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ImgCover } from '../../../ui'

const PictureBox = styled.div`
    position: relative;
    width: 100%;
    font-size: 0;
`

const Date = styled.span`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    padding: 10px 15px;
    text-align: right;
    font-size: 14px;
    font-weight: 300;
    background-color: rgba(255, 255, 255, .7);
`

const BodyBox = styled.div`
    padding: 10px 0;
`

const Name = styled.span`
    display: block;
    font-size: 16px;
    line-height: 20px;
    margin-bottom: 10px;
`

const Description = styled.p`
    display: -webkit-box;
    height: calc(17px * 2);
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    margin-bottom: 20px;
    font-size: 14px;
    line-height: 17px;
    color: #888888;
    overflow: hidden;
`

const LinkStyled = styled(Link)`
    display: block;
    width: fit-content;
    margin-left: auto;
    font-size: 14px;
    color: #1769b7;
`

interface Props {
    store: any
}

export const New: React.FC<Props> = ({ store }) => {
    return (
        <>
            <PictureBox>
                <Date>{store.date}</Date>
                <ImgCover src={store.img.url} alt={store.img.alt} />
            </PictureBox>
            <BodyBox>
                <Name>{store.name}</Name>
                <Description>{store.description}</Description>
                <LinkStyled to='/news'>
                    Читать далее
                </LinkStyled>
            </BodyBox>
        </>
    )
}
