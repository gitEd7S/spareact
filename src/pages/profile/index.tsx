import React from 'react'
import styled from 'styled-components'
import { Template } from '../../ui'
import { Personal } from '../../features/profile'
import { ProfileTemplate } from '../../features/news'

const ProfileRow = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const Line = styled.div`
    width: 1px;
    margin: 0 20px;
    min-height: 100%;
    background-color: #f5f5f5;
    @media screen and (max-width: 1559px) {
        display: none;
    }
`

const ProfilePersonal = styled.div`
    width: 35%;
    @media screen and (max-width: 1559px) {
        width: 50%;
    }
`

const ProfileFriends = styled.div`
    max-width: 300px;
    width: 100%;
    min-height: 400px;
    padding: 15px 20px;
    margin-top: 30px;
`

const ProfileMessage = styled.div`
    width: 20%;
    min-height: 350px;
    padding: 15px 20px;
    @media screen and (max-width: 1559px) {
        width: 50%;
    }
`

const ProfileMusic = styled.div`
    width: 18%;
    padding: 15px 20px;
    @media screen and (max-width: 1559px) {
        width: 50%;
        margin-top: 50px;
    }
`

const ProfileNews = styled.div`
    width: 18.96%;
    @media screen and (max-width: 1559px) {
        width: 50%;
        margin-top: 50px;
    }
`

export const Profile = () => {
    return (
        <>
            <Template>
                <ProfileRow>
                    <ProfilePersonal>
                        <Personal />
                        <ProfileFriends>Friends</ProfileFriends>
                    </ProfilePersonal>
                    <Line />
                    <ProfileMessage>Messages</ProfileMessage>
                    <Line />
                    <ProfileMusic>Music</ProfileMusic>
                    <Line />
                    <ProfileNews>
                        <ProfileTemplate />
                    </ProfileNews>
                </ProfileRow>
            </Template>
        </>
    )
}
