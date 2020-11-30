import React from 'react'
import { useSelector } from 'react-redux'

export const Counter = () => {
  const { comments } = useSelector((state) => state.news)

  return <span>{`${comments.length}`}</span>
}
