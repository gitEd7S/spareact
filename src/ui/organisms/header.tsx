import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink, Link } from 'react-router-dom'
import { Button, Container } from '../../ui'
import { Auth } from '../../features/auth'
import { Modal } from './'

const Links = [
    { id: 1, href: '/profile', name: 'Мой профиль' },
    { id: 2, href: '/messages', name: 'Сообщение' },
    { id: 3, href: '/news', name: 'Новисти' },
    { id: 4, href: '/music', name: 'Музыка' },
]

const HeaderBox = styled.header`
    padding: 20px 0;
`

const ContainerHeader = styled(props => <Container {...props} />)`
    display: flex;
    align-items: center;
    justify-content: space-between;
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

const UserBox = styled.div`
    display: flex;
    align-items: center;
    margin-right: 50px;
    margin-left: auto;
`

const UserBoxName = styled.span`
    display: block;
    margin-right: 10px;
    font-size: 14px;
    font-weight: 300;
`

const UserBoxPicture = styled.figure`
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
`

const UserBoxImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
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
                    <UserBox>
                        <UserBoxName>Юзер аноним</UserBoxName>
                        <UserBoxPicture>
                            <UserBoxImage
                                src="https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_an_Angular_Developer.jpg"
                                alt="User"
                            />
                        </UserBoxPicture>
                    </UserBox>
                    <LinkStyled as={Link} to="/registration" light='true'>Регистрация</LinkStyled>
                    <Button
                        primary
                        type="button"
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
