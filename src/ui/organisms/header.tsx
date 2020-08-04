import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import { Auth } from '../../features/auth'
import { UserBox } from '../../features/profile'
import { Button, Container } from '../../ui'
import { Modal } from './'

const Links = [
    { id: 1, href: '/profile', name: 'Мой профиль' },
    { id: 2, href: '/friends', name: 'Друзья' },
    { id: 3, href: '/messages', name: 'Сообщение' },
    { id: 4, href: '/music', name: 'Музыка' },
    { id: 5, href: '/news', name: 'Новисти' },
]

const HeaderBox = styled.header`
    padding: 20px 0;
`

const ContainerHeader = styled(props => <Container {...props} />)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const UserInner = styled.div`
    display: flex;
    align-items: center;
    margin-right: 50px;
    margin-left: auto;
`

const NavbarBox = styled.div`
    display: flex;
    align-items: center;
`

const NavLinkStyled = styled(NavLink)`
    display: inline-block;
    font-size: 14px;
    color: black;
    &:not(:last-of-type) {
        margin-right: 15px;
    }
    &.active {
        color: #3434cc;
    }
`

const LinkStyled = styled(Button)`
    margin-right: 15px;
`

interface Links {
    id: number
    href: string
    name: string
}

const Navbar = () => (
    <>
        {
            Links.length && Links.map((link: Links) => (
                <NavLinkStyled exact to={link.href} key={link.id}>
                    {link.name}
                </NavLinkStyled>
            ))
        }
    </>
)

export const Header = () => {

    const [isToggle, setToggle] = useState(false)

    return (
        <>
            <HeaderBox>
                <ContainerHeader>
                    <NavbarBox>
                        <Navbar />
                    </NavbarBox>
                    <UserInner>
                        <UserBox />
                    </UserInner>
                    <LinkStyled as={Link} to="/registration" light="true">Регистрация</LinkStyled>
                    <Button
                        type="button"
                        primary
                        onClick={ () => { setToggle(true) } }
                    >
                        Ввойти
                    </Button>
                </ContainerHeader>
            </HeaderBox>
            { isToggle && <Modal small setClose={setToggle}><Auth /></Modal> }
        </>
    )
}
