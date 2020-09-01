import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useActions } from '../../../lib/hooks/useActions'
import { newsSelectors, newsActions } from '../model'
import { New } from '../'

const Title = styled.h3`
    display: block;
    width: 100%;
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
`

const ListNews = styled.div`
    width: 100%;
`

const NewBox = styled.div`
    width: 100%;
    &:not(:last-of-type) {
        margin-bottom: 20px;
    }
`

export const ProfileTemplate: React.FC = () => {

    const news = useSelector(newsSelectors.getNewsProfile)

    const { newsProfileAction } = useActions(newsActions)

    useEffect(() => {
        newsProfileAction()
    }, [])

    return (
        <>
            <Title>Последние новости</Title>
            <ListNews>
                {
                    news.length && news.map((item: any) => (
                        <NewBox key={item.id}>
                            <New data={item} />
                        </NewBox>
                    ))
                }
            </ListNews>
        </>
    )
}
