import React, { memo } from 'react'
import { Button } from 'react-bootstrap'

export const ButtonUpdate = memo(({ onClick, children }) => {
  return <Button onClick={onClick}>{children}</Button>
})
