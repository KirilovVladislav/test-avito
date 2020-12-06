import React, { memo, useEffect, useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

import { NewsInfo } from '../components/NewsInfo/NewsInfo'
import { Comments } from '../components/Comments/Comments'
import { getItem } from '../slice/newsSlice'

const NewsPage = ({ match }) => {
  const { itemId } = match.params
  const dispatch = useDispatch()
  const [newsData, setNewsData] = useState({})

  const setter = useCallback((data) => setNewsData(data), [])

  useEffect(() => {
    dispatch(getItem(itemId, `setActiveNews`, setter))
  }, [])

  return (
    <>
      {newsData.title && (
        <>
          <a href={`${newsData.url}`} target="_blank">
            <h3>{`${newsData.title}`}</h3>
          </a>
          <NewsInfo className={`mx-auto`} {...newsData} />
          <Comments {...newsData}></Comments>
        </>
      )}
    </>
  )
}

export default compose(memo, withRouter)(NewsPage)
