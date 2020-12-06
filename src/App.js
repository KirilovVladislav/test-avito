import React, { memo, useEffect, useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route, Switch, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Container, Alert, Button } from 'react-bootstrap'

import HomePage from './pages/HomePage'
import NewsPage from './pages/NewsPage'
import { Overlay } from './components/Overlay/Overlay'
import { ButtonUpdate } from './components/ButtonUpdate/ButtonUpdate'

import { getNewsIdList, getItem, clearActiveNews } from './slice/newsSlice'


const StyledContainer = styled(Container)`
  padding: 10px;

  @media (max-width: 480px) {
    padding: 0;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;

  h2 {
    margin-bottom: 0;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`

const StyledAlert = styled(Alert)`
    margin-bottom: 0;
    padding: 6px 20px;
    flex-grow: 1;
`

const App = () => {
  const dispatch = useDispatch()
  const initialized = useSelector((state) => state.app.initialized)
  const activeNews = useSelector((state) => state.news.activeNews)
  const newsIdList = useSelector((state) => state.news.newsIdList)

  const [update, setUpdate] = useState(true)
  const [alertMessage, setAlertMessage] = useState(false)
  const [isHandleUpdate, setIsHandleUpdate] = useState(false)
  const [idList, setIdList] = useState(newsIdList)


  useEffect(() => {
    if (newsIdList[0] !== idList[0]) {
      setIdList(newsIdList)
      setAlertMessage(false)
    } else if (isHandleUpdate) {
      setAlertMessage(true)
    }
  }, [newsIdList, isHandleUpdate])

  useEffect(() => {
    const updateInterval = setInterval(() => {
      setUpdate(true)
    }, 1000 * 60)
    return () => clearInterval(updateInterval)
  }, [])

  useEffect(() => {
    if (update) {
      if (activeNews) {
        dispatch(getItem(activeNews.id, `setActiveNews`))
      } else if (!activeNews) {
        dispatch(getNewsIdList())
      }
      setUpdate(false)
    }
  }, [update])


  useEffect(() => {
    if (isHandleUpdate) {
      const timeout = setTimeout(() => {
        setAlertMessage(false)
        setIsHandleUpdate(false)
      }, 5000)
      return () => clearTimeout(timeout)
    }
  }, [isHandleUpdate])

  const clearActiveItem = useCallback(() => dispatch(clearActiveNews()), [])
  const updateData = useCallback(() => setUpdate(true), [])
  const handleUpdate = useCallback(() => {
    setIsHandleUpdate(true)
    updateData()
  }, [])

  return (
    <StyledContainer>
      <Header>
        {alertMessage
          ? <StyledAlert variant={`primary`}>{`there ${activeNews ? 'are' : `is`} no latest ${activeNews ? 'comments' : `news`} in the feed`}</StyledAlert>
          : <>
            <h2>Hacker News</h2>
            {activeNews && <Link to={`/`}>
              <Button onClick={clearActiveItem} variant="outline-primary">
                Back to news list
            </Button>
            </Link>}
            <ButtonUpdate onClick={handleUpdate}>update</ButtonUpdate>
          </>
        }
      </Header>
      <main>
        {
          initialized
            ? <Switch>
              <Route path={`/`} exact render={() => <HomePage updateData={updateData} />}></Route>
              <Route path={`/item/:itemId`} exact render={() => <NewsPage />}></Route>
            </Switch>
            : <Overlay />
        }
      </main >
    </StyledContainer>
  )
}

export default memo((App))