import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { getItem, getNewsIdList } from '../slice/newsSlice'

export const withUpdate = (Component) =>
  withRouter((props) => {
    const dispatch = useDispatch()
    const { activeNews, newsIdList } = useSelector((state) => state.news)
    const { itemId } = props.match.params

    const [data, setData] = useState({})
    const [update, setUpdate] = useState(true)
    const [isHandleUpdate, setIsHandleUpdate] = useState(false)
    const [alertMessage, setAlertMessage] = useState(null)

    const [callback, setCallback] = useState(null)
    const [action, setAction] = useState(null)

    const thank = {
      getNewsIdList: getNewsIdList,
      getItem: getItem,
    }

    useEffect(() => {
      if (update && callback) {
        dispatch(thank[callback](itemId, action))
        setUpdate(false)
      }
    }, [callback, update])

    useEffect(() => {
      const interval = setInterval(() => {
        setUpdate(true)
      }, 1000 * 60)
      return () => clearInterval(interval)
    }, [])

    useEffect(() => {
      if (activeNews.descendants !== data.descendants) {
        setData(activeNews)
        setAlertMessage(null)
      } else if (isHandleUpdate) {
        setAlertMessage(true)
      }
      setIsHandleUpdate(false)
    }, [activeNews])

    useEffect(() => {
      if (newsIdList[0] !== data[0]) {
        setData(newsIdList)
        setAlertMessage(null)
      } else if (isHandleUpdate) {
        setAlertMessage(true)
      }
    }, [newsIdList])

    useEffect(() => {
      if (isHandleUpdate) {
        const timeout = setTimeout(() => {
          setAlertMessage(null)
        }, 5000)
        return () => clearTimeout(timeout)
      }
    }, [isHandleUpdate])

    const handleUpdate = () => {
      setIsHandleUpdate(true)
      setUpdate(true)
    }

    return (
      <Component
        setAction={setAction}
        setCallback={setCallback}
        data={data}
        handleUpdate={handleUpdate}
        alertMessage={alertMessage}
        {...props}
      />
    )
  })
