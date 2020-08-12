import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { ImgCover } from '../../../ui'

const PictureBox = styled.div`
    position: relative;
    width: 100%;
    height: 200px;
    font-size: 0;
    overflow: hidden;
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
    display: flex;
    flex-direction: column;
    height: calc(100% - 200px);
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

const LinkStyled = styled(NavLink)`
    display: block;
    width: fit-content;
    margin-left: auto;
    margin-top: auto;
    font-size: 14px;
    color: #1769b7;
`

interface Props {
    data: any
}

export const New: React.FC<Props> = ({ data }) => {
    const { id, date, img, name, description } = data
    return (
        <>
            <PictureBox>
                <Date>{date}</Date>
                <ImgCover src={img.url} alt={img.alt} />
            </PictureBox>
            <BodyBox>
                <Name>{name}</Name>
                <Description>{description}</Description>
                <LinkStyled to={`/new/${id}`}>Читать далее</LinkStyled>
            </BodyBox>
        </>
    )
}
