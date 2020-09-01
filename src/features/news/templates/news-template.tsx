import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useActions } from '../../../lib/hooks/useActions'
import { newsSelectors, newsActions } from '../model'
import { New } from '../'

const Title = styled.h3`
    display: block;
    width: 100%;
    margin-bottom: 20px;
    font-size: 22px;
    line-height: 22px;
    font-weight: 400;
`

const ListNews = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

const NewBox = styled.div`
    width: calc(100% / 5 - (4 * 15px) / 5);
    margin-right: 15px;
    margin-bottom: 25px;
    &:nth-of-type(5n) {
        margin-right: 0px;
    }
`

export const NewsTemplate: React.FC = () => {

    const news = useSelector(newsSelectors.getNews)

    const { newsAction } = useActions(newsActions)

    useEffect(() => {
        newsAction()
    }, [])

    return (
        <>
            <Title>Новости</Title>
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
