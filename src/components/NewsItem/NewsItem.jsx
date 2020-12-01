import React, { memo, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

import { getItem } from '../../slice/newsSlice'
import { NewsInfo } from '../NewsInfo/NewsInfo'
import styles from './NewsItem.module.scss'

export const NewsItem = memo(({ id }) => {
  const dispatch = useDispatch()
  const [itemInfo, setItemInfo] = useState({})

  useEffect(() => {
    dispatch(getItem(id, `setNewsItem`, setItemInfo))
  }, [])

  return (
    <>
      {itemInfo.title && (
        <ListGroup.Item key={id}>
          <Link to={`/item/${id}`}>
            <h3 className={styles.title}>{`${itemInfo.title}`}</h3>
          </Link>
          <NewsInfo {...itemInfo} />
        </ListGroup.Item>
      )}
    </>
  )
})
