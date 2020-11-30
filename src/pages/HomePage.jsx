import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Container, ListGroup, Button, Alert } from 'react-bootstrap'
import styled from 'styled-components'

import { NewsItem } from '../components/NewsItem/NewsItem'
import { getNewsIdList } from '../slice/newsSlice'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px;
`

export const HomePage = () => {
  const dispatch = useDispatch()
  const { newsIdList } = useSelector((state) => state.news)
  const [idList, setIdList] = useState(newsIdList)
  const [updateNews, setUpdateNews] = useState(true)
  const [isHandleUpdateNews, setIsHandleUpdateNews] = useState(false)
  const [alertMessage, setAlertMessage] = useState(null)

  useEffect(() => {
    if (updateNews) {
      dispatch(getNewsIdList())
      setUpdateNews(false)
    }
  }, [updateNews])

  useEffect(() => {
    const interval = setInterval(() => {
      setUpdateNews(true)
    }, 1000 * 60)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (newsIdList[0] !== idList[0]) {
      setIdList(newsIdList)
      setAlertMessage(null)
    } else if (isHandleUpdateNews) {
      setAlertMessage(`there is no latest in the feed`)
    }

    setIsHandleUpdateNews(false)
  }, [newsIdList])

  const HandleUpdateNews = () => {
    setIsHandleUpdateNews(true)
    setUpdateNews(true)
    setTimeout(() => {
      setAlertMessage(null)
    }, 3000)
  }

  return (
    <Container>
      <Header>
        <h1>Hacker News</h1>
        <Button onClick={HandleUpdateNews}>update news</Button>
      </Header>
      {alertMessage && <Alert variant={`primary`}>{`${alertMessage}`}</Alert>}
      <ListGroup>
        {newsIdList.map((item) => (
          <NewsItem key={item} id={item} />
        ))}
      </ListGroup>
    </Container>
  )
}
