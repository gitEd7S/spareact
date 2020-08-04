import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useActions } from '../../../lib/hooks/useActions'
import { profileActions, profileSelectors } from '../model'
import { ImgCover, IconEdit } from '../../../ui'
import { Label, EditPersonal } from '../'

const Wrapper = styled.div`
    display: flex;
`

const Box = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
`

const Picture = styled.figure`
    display: block;
    width: 100%;
    height: 100%;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 30px;
`

const Name = styled.span`
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
`

const Status = styled.span`
    display: inline-block;
    font-size: 14px;
    font-weight: 300;
`

const UploadAvatar = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
`

const Input = styled.input`
    display: none;
`

const GroupEdit = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: fit-content;
    margin-bottom: 18px;
`

const IconWrap = styled.div`
    width: 15px;
    height: 15px;
    margin-left: 15px;
    cursor: pointer;
    user-select: none;
`

export const Personal = () => {

    const avatar = useSelector(profileSelectors.getAvatar)
    const personal = useSelector(profileSelectors.getPersonal)

    const { setUpload, setEditName, setEditStatus } = useActions(profileActions)

    const [name, setName] = useState(false)
    const [status, setStatus] = useState(false)

    const changeAvatar = (event: any): void => {
        const reader: any = new FileReader()
        if(event.target.files.length) {
            reader.readAsDataURL(event.target.files[0])
            reader.onload = (e: Event & { target: { result: string } }): void => {
                setUpload(e.target.result)
            }
        }
    }

    const toggleEditName = (): void => {
        setName(!name)
        setStatus(false)
    }

    const toggleEditStatus = (): void => {
        setStatus(!status)
        setName(false)
    }

    const onEditName = (value: string): void => {
        setEditName(value)
        setName(false)
    }

    const onEditStatus = (value: string): void => {
        setEditStatus(value)
        setStatus(false)
    }

    return (
        <Wrapper>
            <Box>
                <Picture><ImgCover src={avatar} alt="" /></Picture>
                <UploadAvatar>
                    <Label htmlFor="avatar">Изменить аватар</Label>
                    <Input
                        type="file"
                        id="avatar"
                        accept=".jpg, .jpeg, .png, .svg"
                        onChange={changeAvatar}
                    />
                </UploadAvatar>
            </Box>
            <Info>
                <GroupEdit>
                    <Name>{personal.name}</Name>
                    { name && <EditPersonal defaultValue={personal.name} setEdit={onEditName} /> }
                    <IconWrap onClick={toggleEditName}><IconEdit fill="#424B5F" /></IconWrap>
                </GroupEdit>
                <GroupEdit>
                    <Status>{personal.status}</Status>
                    { status && <EditPersonal defaultValue={personal.status} setEdit={onEditStatus} /> }
                    <IconWrap onClick={toggleEditStatus}><IconEdit fill="#424B5F" /></IconWrap>
                </GroupEdit>
            </Info>
        </Wrapper>
    )
}
