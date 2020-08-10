import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import { Auth } from '../../features/auth'
import { UserBox } from '../../features/profile'
import { Button, Container } from '../../ui'

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
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HeaderPopup = styled.div``

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

const AuthInner = styled.div`
    position: absolute;
    top: 60px;
    right: 15px;
    width: 300px;
    padding: 25px 20px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 1px 2px 5px #b9b9b9;
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

    const [isToggle, setToggle] = useState<boolean>(false)

    const headerPopupRef = useRef<(HTMLDivElement | any)>(null)

    const outSideAuthInner = (event: any) => {
        if (isToggle && headerPopupRef && !headerPopupRef.current.contains(event.target)) {
            setToggle(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', outSideAuthInner)
        return () => { document.removeEventListener('mousedown', outSideAuthInner) }
    })

    return (
        <>
            <HeaderBox>
                <ContainerHeader>
                    <NavbarBox><Navbar /></NavbarBox>
                    <UserInner><UserBox /></UserInner>
                    <LinkStyled as={Link} to="/registration" light="true">Регистрация</LinkStyled>
                    <HeaderPopup ref={headerPopupRef}>
                        <Button
                            type="button"
                            primary
                            onClick={ () => { setToggle(!isToggle) } }
                        >
                            Ввойти
                        </Button>
                        { isToggle && <AuthInner><Auth /></ AuthInner> }
                    </HeaderPopup>
                </ContainerHeader>
            </HeaderBox>
        </>
    )
}
