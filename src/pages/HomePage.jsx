import React, { memo, useEffect } from 'react'
import { compose } from 'redux'

import { Container, ListGroup, Alert } from 'react-bootstrap'
import styled from 'styled-components'

import { NewsItem } from '../components/NewsItem/NewsItem'
import { ButtonUpdate } from '../components/ButtonUpdate/ButtonUpdate'
import { withUpdate } from '../hocs/withUpdate'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const HomePage = ({
  setCallback,
  data = [],
  handleUpdate,
  alertMessage = false,
}) => {
  useEffect(() => {
    setCallback(`getNewsIdList`)
  }, [])

  return (
    <Container>
      <Header>
        <h2>Hacker News</h2>
        <ButtonUpdate handleUpdate={handleUpdate}>update news</ButtonUpdate>
      </Header>
      {alertMessage && (
        <Alert variant={`primary`}>there is no latest news in the feed</Alert>
      )}
      <ListGroup>
        {data[0] && data.map((item) => <NewsItem key={item} id={item} />)}
      </ListGroup>
    </Container>
  )
}

export default compose(withUpdate, memo)(HomePage)
