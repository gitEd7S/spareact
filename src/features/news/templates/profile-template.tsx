import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { newsSelectors } from '../model'
import { New } from '../'

const ListNews = styled.div`
    width: 100%;
`

const Title = styled.h3`
    display: block;
    width: 100%;
    margin-bottom: 15px;
    font-size: 18px;
    line-height: 22px;
    font-weight: 400;
`

const NewBox = styled.div`
    width: 100%;
    &:not(:last-of-type) {
        margin-bottom: 20px;
    }
`

export const ProfileTemplate: React.FC = () => {

    const news = useSelector(newsSelectors.getNews)

    console.log(news)

    return (
        <>
            <Title>Последние новости</Title>
            <ListNews>
                {
                    news.length && news.map((item: any) => (
                        <NewBox key={item.id}>
                            <New store={item} />
                        </NewBox>
                    ))
                }
            </ListNews>
        </>
    )
}
