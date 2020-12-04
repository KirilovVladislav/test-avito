import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { compose } from 'redux'
import { Link } from 'react-router-dom'

import { Container, Alert, Button } from 'react-bootstrap'

import { clearNews } from '../slice/newsSlice'
import { NewsInfo } from '../components/NewsInfo/NewsInfo'
import { Comments } from '../components/Comments/Comments'
import { ButtonUpdate } from '../components/ButtonUpdate/ButtonUpdate'
import { Overlay } from '../components/Overlay/Overlay'
import { withUpdate } from '../hocs/withUpdate'

const NewsPage = ({
  setAction,
  setCallback,
  data = {},
  handleUpdate,
  alertMessage = false,
}) => {
  const dispatch = useDispatch()
  useEffect(() => {
    setCallback(`getItem`)
    setAction(`setActiveNews`)
    dispatch(clearNews())
  }, [])

  return (
    <Container>
      {data.title ? (
        <>
          <Link to={`/`}>
            <Button variant="outline-primary">Back to news list</Button>
          </Link>
          <a href={`${data.url}`} target="_blank">
            <h3>{`${data.title}`}</h3>
          </a>
          <NewsInfo className={`mx-auto`} {...data} />
          {alertMessage && (
            <Alert variant={`primary`}>
              there are no latest comments in the feed
            </Alert>
          )}
          <Comments {...data}>
            <ButtonUpdate handleUpdate={handleUpdate}>
              update comments
            </ButtonUpdate>
          </Comments>
        </>
      ) : (
        <Overlay />
      )}
    </Container>
  )
}

export default compose(withUpdate, memo)(NewsPage)
