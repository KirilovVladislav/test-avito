import * as axios from 'axios'

import { setError } from './slice/appSlice'


const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://hacker-news.firebaseio.com/v0/`,
    credentials: true,
    origin: 'http://localhost:3000',
  })

  const onSuccess = (response) => response

  const onFail = (err) => {
    dispatch(setError(err.statusText))
    // throw new Error(err.statusText)
  }

  api.interceptors.response.use(onSuccess, onFail)

  return api
}


export default createAPI