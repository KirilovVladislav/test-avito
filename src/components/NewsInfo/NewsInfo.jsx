import React, { memo } from 'react'

import styles from './NewsInfo.module.scss'
import { Time } from '../Time/Time'

export const NewsInfo = memo(({ score, by, time }) => {
  return (
    <p className={styles.newsInfo}>
      <span>{`${score} ${score === 1 ? `point` : `points`}`}</span>
      <span>{`by ${by}`}</span>
      <Time time={time}> ago</Time>
    </p>
  )
})
