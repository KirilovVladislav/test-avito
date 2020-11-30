import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Container } from 'react-bootstrap'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { getItem } from '../slice/newsSlice'
import { NewsInfo } from '../components/NewsInfo/NewsInfo'
import { Comments } from '../components/Comments/Comments'

const NewsPage = ({ match }) => {
  const { itemId } = match.params
  const dispatch = useDispatch()
  const [data, setData] = useState({})

  useEffect(() => {
    dispatch(getItem(itemId, setData, `setNewsItem`))
  }, [])

  return (
    <Container>
      {data.title ? (
        <>
          <a href={`${data.url}`} target="_blank">
            <h3>{`${data.title}`}</h3>
          </a>
          <NewsInfo {...data} />
          <Comments {...data} />
        </>
      ) : (
        <div>load</div>
      )}
    </Container>
  )
}

export default compose(withRouter, memo)(NewsPage)
