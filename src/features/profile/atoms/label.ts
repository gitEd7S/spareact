import styled from 'styled-components'

export const Label = styled.label`
    display: block;
    width: 100%;
    height: 40px;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    color: black;
    background-color: rgba(255, 255, 255, .8);
    cursor: pointer;
    user-select: none;
    @media screen and (min-width: 992px) {
        transition-duration: .2s;
        &:hover {
            background-color: rgba(255, 255, 255, .9);
        }
    }
`
