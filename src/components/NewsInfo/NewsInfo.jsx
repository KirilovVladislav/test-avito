import React from 'react'

import styles from './NewsInfo.module.scss'
import { Time } from '../Time/Time'

export const NewsInfo = ({ score, by, time }) => {
  return (
    <p className={styles.newsInfo}>
      <span>{`${score} point`}</span>
      <span>{`by ${by}`}</span>
      <Time time={time}> ago</Time>
    </p>
  )
}
