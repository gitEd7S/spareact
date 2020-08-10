import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ImgCover } from '../../../ui'

const Box = styled.div`
    width: 100%;
`

const PictureBox = styled.div`
    position: relative;
    width: 100%;
`

const Date = styled.span`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    padding: 10px 15px;
    background-color: rgba(255, 255, 255, .8);
    text-align: right;
`

const BodyBox = styled.div`
    padding: 10px 0;
`

const Name = styled.span`
    display: block;
    font-size: 16px;
    margin-bottom: 10px;
`

const Description = styled.p`
    display: block;
    font-size: 14px;
    color: #888888;
`

const LinkStyled = styled(Link)`
    display: block;
    font-size: 14px;
    color: blue;
`

export const New: React.FC = () => {
    return (
        <Box>
            <PictureBox>
                <Date>05.06.20</Date>
                <ImgCover src="https://biz.liga.net/images/general/2017/07/05/201707050820342645.jpg?v=1520566161" alt="Новости" />
            </PictureBox>
            <BodyBox>
                <Name>Новости</Name>
                <Description>Короткий опис новини</Description>
                <LinkStyled to='/news' />
            </BodyBox>
        </Box>
    )
}