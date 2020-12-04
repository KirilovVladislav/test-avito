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
          setIsHandleUpdate(false)
        }, 5000)
        return () => clearTimeout(timeout)
      }
    }, [isHandleUpdate])

    const handleUpdate = () => {
      setIsHandleUpdate(true)
      setUpdate(true)
    }
    // обновление по касанию для сенсорных

    const [startTouch, setStartTouch] = useState(null)
    const [endTouch, setEndTouch] = useState(null)
    const [startPage, setStartPage] = useState(null)
    const [endPage, setEndPage] = useState(null)

    useEffect(() => {
      if (startPage === 0 && endPage == 0 && endTouch - startTouch > 100) {
        handleUpdate()
      }
    }, [endTouch])

    const Handle = {
      setStartTouch: (evt) => {
        setStartTouch(evt.touches[0].clientY)
        setStartPage(window.pageYOffset)
      },
      setEndTouch: (evt) => {
        setEndTouch(evt.changedTouches[0].clientY)
        setEndPage(window.pageYOffset)
      },
    }

    return (
      <Component
        touchStart={(evt) => Handle.setStartTouch(evt)}
        touchEnd={(evt) => Handle.setEndTouch(evt)}
        setAction={setAction}
        setCallback={setCallback}
        data={data}
        handleUpdate={handleUpdate}
        alertMessage={alertMessage}
        {...props}
      />
    )
  })

// import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { withRouter } from 'react-router-dom'

// import { getItem, getNewsIdList } from '../slice/newsSlice'

// export const withUpdate = (Component) =>
//   withRouter((props) => {
//     const dispatch = useDispatch()
//     const { activeNews, newsIdList } = useSelector((state) => state.news)
//     const { itemId } = props.match.params

//     const [data, setData] = useState({})
//     const [update, setUpdate] = useState(true)
//     const [isHandleUpdate, setIsHandleUpdate] = useState(false)
//     const [alertMessage, setAlertMessage] = useState(null)

//     const [callback, setCallback] = useState(null)
//     const [action, setAction] = useState(null)

//     const thank = {
//       getNewsIdList: getNewsIdList,
//       getItem: getItem,
//     }

//     useEffect(() => {
//       if (update && callback) {
//         dispatch(thank[callback](itemId, action))
//         setUpdate(false)
//       }
//     }, [callback, update])

//     useEffect(() => {
//       const interval = setInterval(() => {
//         setUpdate(true)
//       }, 1000 * 60)
//       return () => clearInterval(interval)
//     }, [])

//     useEffect(() => {
//       if (activeNews.descendants !== data.descendants) {
//         setData(activeNews)
//         setAlertMessage(null)
//       } else if (isHandleUpdate) {
//         setAlertMessage(true)
//       }
//     }, [activeNews])

//     useEffect(() => {
//       if (newsIdList[0] !== data[0]) {
//         setData(newsIdList)
//         setAlertMessage(null)
//       } else if (isHandleUpdate) {
//         setAlertMessage(true)
//       }
//     }, [newsIdList])

//     useEffect(() => {
//       if (isHandleUpdate) {
//         const timeout = setTimeout(() => {
//           setAlertMessage(null)
//           setIsHandleUpdate(false)
//         }, 5000)
//         return () => clearTimeout(timeout)
//       }
//     }, [isHandleUpdate])

//     const handleUpdate = () => {
//       setIsHandleUpdate(true)
//       setUpdate(true)
//     }

//     return (
//       <Component
//         setAction={setAction}
//         setCallback={setCallback}
//         data={data}
//         handleUpdate={handleUpdate}
//         alertMessage={alertMessage}
//         {...props}
//       />
//     )
//   })
