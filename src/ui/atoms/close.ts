import styled from "styled-components"

export const Close = styled.button`
    position: relative;
    display: block;
    width: 30px;
    height: 30px;
    &:before,
    &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 100%;
        height: 1px;
        background-color: black;
    }
    &:before {
        transform: translate(-50%, -50%) rotate(45deg);
    }
    &:after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`
