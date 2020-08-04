import React, { useState } from 'react'
import styled from 'styled-components'
import { PopupEdit, PopupInput, PopupBtn } from '../'

const PopupInputStyled = styled(PopupInput)`
    width: calc(100% - 40px);
`

const PopupEditStyled = styled(PopupEdit)`
    position: absolute;
    left: 0;
    top: calc(100% + 10px);
    z-index: 100;
    width: calc(100% + 40px);
    height: 32px;
`

const PopupBtnStyled = styled(PopupBtn)`
    width: 40px;
    height: 100%;
`

interface Props {
    defaultValue: string
    setEdit(value: string): void
}

export const EditPersonal: React.FC<Props> = ({ defaultValue, setEdit }) => {
    const [value, setValue] = useState<string>(defaultValue)
    return (
        <PopupEditStyled>
            <PopupInputStyled
                value={value}
                onChange={(e): void => setValue(e.target.value)}
            />
            <PopupBtnStyled onClick={() => setEdit(value)}>Ред.</PopupBtnStyled>
        </PopupEditStyled>
    )
}
