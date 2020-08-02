import styled, { css } from "styled-components"

interface Button {
    primary?: boolean | string
    light?: boolean | string
    small?: boolean | string
}

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 0 15px;
    ${(props: Button) => props.primary && css`
        height: 40px;
        border-radius: 8px;
        font-size: 16px;
        color: white;
        background-color: #424B5F;
        @media screen and (min-width: 992px) {
            transition-duration: .3s;
            &:hover {
                background-color: #677086;
            }
        }
    `}
    ${(props: Button) => props.light && css`
        height: 40px;
        border-radius: 8px;
        font-size: 16px;
        color: #424B5F;
        background-color: #EAECF1;
        @media screen and (min-width: 992px) {
            transition-duration: .3s;
            &:hover {
                background-color: #f3f3f3;
            }
        }
    `}
    ${(props: Button) => props.small && css`
        height: 28px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 300;
        color: white;
        background-color: #424B5F;
    `}
`
