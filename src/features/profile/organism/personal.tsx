import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useActions } from '../../../lib/hooks/useActions'
import { profileActions, profileSelectors } from '../model'
import { ImgCover } from '../../../ui'
import { Label } from '../atoms'

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
    margin-bottom: 15px;
`

const Status = styled.span`
    display: inline-block;
    font-size: 14px;
    font-weight: 300;
    margin-bottom: 15px;
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

export const Personal = () => {

    const avatar = useSelector(profileSelectors.getAvatar)

    const { setUpload } = useActions(profileActions)

    const changeAvatar = (event: any) => {
        const reader = new FileReader()
        reader.readAsDataURL(event.target.files[0])
        reader.onload = (e: any) => {
            setUpload(e.target.result)
        }
    }

    return (
        <Wrapper>
            <Box>
                <Picture>
                    <ImgCover src={avatar} alt="" />
                </Picture>
                <UploadAvatar>
                    <Label htmlFor="avatar">Изменить аватар</Label>
                    <Input
                        type="file"
                        name="avatar"
                        id="avatar"
                        accept=".jpg, .jpeg, .png, .svg"
                        onChange={changeAvatar}
                    />
                </UploadAvatar>
            </Box>
            <Info>
                <Name>Аноним</Name>
                <Status>Аноним</Status>
            </Info>
        </Wrapper>
    )
}
