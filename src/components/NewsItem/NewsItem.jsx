import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

import { getItem } from '../../slice/newsSlice'
import { NewsInfo } from '../NewsInfo/NewsInfo'
import styles from './NewsItem.module.scss'

export const NewsItem = memo(({ id }) => {
  const dispatch = useDispatch()
  const newsData = useSelector((state) =>
    state.news.news.find((i) => i.id === id)
  )

  useEffect(() => {
    !newsData && dispatch(getItem(id, `setNewsItem`))
  }, [])

  return (
    newsData && (
      <ListGroup.Item>
        <Link to={`/item/${id}`}>
          <h3 className={styles.title}>{`${newsData.title}`}</h3>
        </Link>
        <NewsInfo {...newsData} />
      </ListGroup.Item>
    )
  )
})
