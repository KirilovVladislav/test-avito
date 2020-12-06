import React, { memo, useEffect, useState } from 'react'

import { mapTime } from '../../utils/mapTime'

export const Time = memo(({ time, children }) => {
  const [timeAgo, setTimeAgo] = useState(mapTime(time))
  useEffect(() => {
    const interval = setInterval(() => setTimeAgo(mapTime(time)), 1000 * 60)

    return () => clearInterval(interval)
  }, [])

  return (
    <span>
      {`${timeAgo}`}
      {children}
    </span>
  )
})
