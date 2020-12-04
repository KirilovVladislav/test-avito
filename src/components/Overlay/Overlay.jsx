import React from 'react'
import { Spinner } from 'react-bootstrap'

import styles from './Overlay.module.scss'

export const Overlay = () => {
  return (
    <section className={styles.overlay}>
      <Spinner animation="border" role="status">
        <span className={`sr-only`}>Loading...</span>
      </Spinner>
    </section>
  )
}
