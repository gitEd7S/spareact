import React from 'react'
import styled, { css } from 'styled-components'
import { Close } from '../../ui'

const ModalBox = styled.div`
    position: fixed;
    display: none;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
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
    padding: 20px 15px;
    border-radius: 5px;
    background-color: white;
    ${(props: any) => props.small && css`
        max-width: 320px;
    `}
    ${(props: any) => props.middle && css`
        max-width: 420px;
    `}
    ${(props: any) => props.large && css`
        max-width: 520px;
    `}
`

interface Props {
    children: any
    small?: boolean
    middle?: boolean
    large?: boolean
}

export const Modal: React.FC<Props> = ({ children }) => {

    return (
        <ModalBox>
            <Close type="button" />
            <Wrapper>
                <Inner>
                    {children}
                </Inner>
            </Wrapper>
        </ModalBox>
    )
}
