import React, { memo } from 'react'
import { Container } from 'react-bootstrap'

import { Comment } from '../Comment/Comment'
import styles from './Comments.module.scss'

export const Comments = memo(({ kids = [], descendants, children }) => {
  return (
    <section>
      <Container className={styles.container}>
        <h4 className={styles.header}>
          Comments
          <span className={styles.counter}>{`${descendants}`}</span>
        </h4>
        {children}
      </Container>
      {kids.map((id) => (
        <Comment id={id} key={id} />
      ))}
    </section>
  )
})
