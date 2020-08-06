import React, { useState, useEffect, useRef } from 'react'
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

const PersonalBox = styled.div`
    display: flex;
    flex-direction: column;
    width: calc(100% - 200px);
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
    line-height: 18px;
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
    min-width: 15px;
    width: 15px;
    height: 15px;
    margin-right: 15px;
    cursor: pointer;
    user-select: none;
`

export const Personal = () => {

    const groupEditElemets = useRef<(HTMLDivElement | null)[]>([])

    const avatar: string = useSelector(profileSelectors.getAvatar)
    const personalName: string = useSelector(profileSelectors.getName)
    const personalStatus: string = useSelector(profileSelectors.getStatus)

    const { uploadAvatar, editName, editStatus } = useActions(profileActions)

    const [name, setName] = useState<boolean>(false)
    const [status, setStatus] = useState<boolean>(false)

    const changeAvatar = (event: any): void => {
        const reader: FileReader = new FileReader()
        if (event.target.files.length) {
            reader.readAsDataURL(event.target.files[0])
            reader.onload = (): void => {
                uploadAvatar(reader.result)
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
        editName(value)
        setName(false)
    }

    const onEditStatus = (value: string): void => {
        editStatus(value)
        setStatus(false)
    }

    const outSideEditPersonal = (event: any) => {
        const isToggle: boolean = name || status
        const elemets: any = groupEditElemets.current
        const elemetsLength: boolean = elemets.length
        if (isToggle && elemetsLength && !elemets[0].contains(event.target) && !elemets[1].contains(event.target)) {
            setName(false)
            setStatus(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', outSideEditPersonal)
        return () => { document.removeEventListener('mousedown', outSideEditPersonal) }
    }, [name, status])

    return (
        <Wrapper>
            <Box>
                <Picture><ImgCover src={avatar} alt={personalName} /></Picture>
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
            <PersonalBox>
                <GroupEdit ref={(ref: any) => { groupEditElemets.current.push(ref) }}>
                    <IconWrap onClick={toggleEditName}><IconEdit fill="#424B5F" /></IconWrap>
                    { name && <EditPersonal defaultValue={personalName} setEdit={onEditName} /> }
                    <Name>{personalName}</Name>
                </GroupEdit>
                <GroupEdit ref={(ref: any) => { groupEditElemets.current.push(ref) }}>
                    <IconWrap onClick={toggleEditStatus}><IconEdit fill="#424B5F" /></IconWrap>
                    { status && <EditPersonal defaultValue={personalStatus} setEdit={onEditStatus} /> }
                    <Status>{personalStatus}</Status>
                </GroupEdit>
            </PersonalBox>
        </Wrapper>
    )
}
