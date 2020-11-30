import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Container } from 'react-bootstrap'

import { getItem } from '../../slice/newsSlice'
import styles from './Comment.module.scss'

export const Comment = ({ id }) => {
  const dispatch = useDispatch()
  const [itemInfo, setItemInfo] = useState({})

  useEffect(() => {
    dispatch(getItem(id, setItemInfo, `setComment`))
  }, [])

  return (
    <>
      {itemInfo.text && (
        <Card className={styles.card}>
          <Container>
            <Card.Title>{`${itemInfo.by}`}</Card.Title>
            <Card.Body
              dangerouslySetInnerHTML={{ __html: `${itemInfo.text}` }}
            ></Card.Body>
            {itemInfo.kids &&
              itemInfo.kids.map((id) => <Comment id={id} key={id} />)}
          </Container>
        </Card>
      )}
    </>
  )
}
