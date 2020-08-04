import React from 'react'
import styled, { css } from 'styled-components'
import { Close } from '../../ui'

const ModalBox = styled.div`
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    background-color: rgba(0, 0, 0, .7);
    overflow: auto;
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100%;
`

const Inner = styled.div`
    width: 100%;
    padding: 30px 25px;
    border-radius: 8px;
    background-color: white;
    box-shadow: -3px -3px 8px #383838;
    ${(props: ThemesSize) => props.small && css`
        max-width: 320px;
    `}
    ${(props: ThemesSize) => props.middle && css`
        max-width: 420px;
    `}
    ${(props: ThemesSize) => props.large && css`
        max-width: 520px;
    `}
`

const ButtonClose = styled(Close)`
    position: absolute;
    top: 10px;
    right: 10px;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, .1);
    &:before,
    &:after {
        background-color: white;
    }
    @media screen and (min-width: 992px) {
        transition-duration: .3s;
        &:hover {
            background-color: rgba(255, 255, 255, .2);
        }
    }
`

interface ThemesSize {
    small?: boolean
    middle?: boolean
    large?: boolean
}

interface Props extends ThemesSize {
    children: any
    setClose: any
}

export const Modal: React.FC<Props> = ({ children, small, setClose }) => {
    return (
        <ModalBox>
            <ButtonClose type="button" onClick={ () => setClose(false) } />
            <Wrapper>
                <Inner small>
                    {children}
                </Inner>
            </Wrapper>
        </ModalBox>
    )
}
