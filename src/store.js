import { configureStore } from '@reduxjs/toolkit'

import appReducer from './slice/appSlice'
import newsReducer from './slice/newsSlice'
import createAPI from './api'


const api = createAPI((...args) => store.dispatch(...args))

const store = configureStore({
  reducer: {
    app: appReducer,
    news: newsReducer,
  },
  middleware: (getDefaultMiddleware) => (
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
      // serializableCheck: false,
    })
  )
})


export default store