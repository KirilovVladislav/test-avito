import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { compose } from 'redux'

import { Container, ListGroup, Alert, Spinner } from 'react-bootstrap'
import styled from 'styled-components'

import { clearNews } from '../slice/newsSlice'
import { NewsItem } from '../components/NewsItem/NewsItem'
import { ButtonUpdate } from '../components/ButtonUpdate/ButtonUpdate'
import { withUpdate } from '../hocs/withUpdate'

const StyledContainer = styled(Container)`
  @media (max-width: 480px) {
    padding: 0;
  }
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 400px) {
    padding: 0 10px;
  }
`

const HomePage = ({ setCallback, data = [], handleUpdate, alertMessage }) => {
  const dispatch = useDispatch()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setCallback(`getNewsIdList`)
    return () => dispatch(clearNews())
  }, [])

  return (
    <StyledContainer>
      <Header>
        <h2>Hacker News</h2>
        <ButtonUpdate handleUpdate={handleUpdate}>update news</ButtonUpdate>
      </Header>
      {alertMessage && (
        <Alert variant={`primary`}>there is no latest news in the feed</Alert>
      )}
      {loading && (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      )}
      <ListGroup>
        {data[0] &&
          data.map((item) => (
            <NewsItem
              key={item}
              loading={loading}
              setLoading={setLoading}
              id={item}
            />
          ))}
      </ListGroup>
    </StyledContainer>
  )
}

export default compose(withUpdate, memo)(HomePage)
