import React from 'react'
import { Button } from 'react-bootstrap'

export const ButtonUpdate = ({ handleUpdate, children }) => {
  return <Button onClick={handleUpdate}>{children}</Button>
}
