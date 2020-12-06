import React, { memo, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { ListGroup } from 'react-bootstrap'

import { NewsItem } from '../components/NewsItem/NewsItem'

const HomePage = ({ updateData }) => {
  const newsIdList = useSelector((state) => state.news.newsIdList)

  useEffect(() => {
    updateData()
  }, [])

  return (
    <ListGroup>
      {newsIdList.map((item) => (
        <NewsItem key={item} id={item} />
      ))}
    </ListGroup>
  )
}

export default memo(HomePage)
