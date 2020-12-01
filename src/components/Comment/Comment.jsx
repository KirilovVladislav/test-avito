import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Card, Container, Button } from 'react-bootstrap'

import { getItem } from '../../slice/newsSlice'
import styles from './Comment.module.scss'

export const Comment = ({ id }) => {
  const dispatch = useDispatch()
  const [itemInfo, setItemInfo] = useState({})
  const [showCommentsTree, setShowCommentsTree] = useState(false)

  useEffect(() => {
    dispatch(getItem(id, `setComment`, setItemInfo))
  }, [])

  const toggleShowInnerComments = () => {
    setShowCommentsTree((prev) => !prev)
  }

  return (
    <>
      {itemInfo.text && (
        <Card className={styles.card}>
          <Container>
            <Card.Title>{`${itemInfo.by}`}</Card.Title>
            <Card.Body
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: `${itemInfo.text}` }}
            ></Card.Body>
            {itemInfo.kids && (
              <Button
                onClick={toggleShowInnerComments}
                className={styles.btn}
                variant={!showCommentsTree ? `outline-dark` : `dark`}
              >
                {!showCommentsTree ? `Show more comments` : `Hide comments`}
              </Button>
            )}
            {itemInfo.kids &&
              showCommentsTree &&
              itemInfo.kids.map((id) => <Comment id={id} key={id} />)}
          </Container>
        </Card>
      )}
    </>
  )
}
