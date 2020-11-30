import React from 'react'

import { Comment } from '../Comment/Comment'
import { Counter } from '../Counter/Counter'

export const Comments = ({ kids = [] }) => {
  return (
    <section>
      <h4>Comments</h4>
      <Counter />
      {kids.map((id) => (
        <Comment id={id} key={id} />
      ))}
    </section>
  )
}
