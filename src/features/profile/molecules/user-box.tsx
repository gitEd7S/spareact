import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { profileSelectors } from '../model'
import { ImgCover } from '../../../ui'

const Name = styled.span`
    display: block;
    margin-right: 10px;
    font-size: 14px;
    font-weight: 300;
`

const CirclePicture = styled.figure`
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
`

export const UserBox: React.FC = () => {
    const profile: { name: string, avatar: string } = useSelector(profileSelectors.getProfile)
    return (
        <>
            <Name>{profile.name}</Name>
            <CirclePicture>
                <ImgCover src={profile.avatar} alt="User" />
            </CirclePicture>
        </>
    )
}
