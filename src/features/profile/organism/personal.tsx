import React from 'react'
import styled from 'styled-components'
import { Button } from '../atoms'

const Wrapper = styled.div`
    display: flex;
`

const Box = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
`

const Picture = styled.figure`
    display: block;
    width: 100%;
    height: 100%;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const ButtonStyled = styled(Button)`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 30px;
`

const Name = styled.span`
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 15px;
`

const Status = styled.span`
    display: inline-block;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 15px;
`

export const Personal = () => {
    return (
        <Wrapper>
            <Box>
                <Picture>
                    <Image src="https://u-recruit.com.ua/wp-content/uploads/2018/06/SENIOR-FRONT-END-WEB-DEVELOPER-1.jpg" alt="" />
                </Picture>
                <ButtonStyled>Изменить фото</ButtonStyled>
            </Box>
            <Info>
                <Name>Аноним</Name>
                <Status>Аноним</Status>
            </Info>
        </Wrapper>
    )
}
