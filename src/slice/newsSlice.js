import { createSlice } from '@reduxjs/toolkit'

import { setInitialized } from './appSlice'

const PAGE_SIZE = 100

const initialState = {
  newsIdList: [],
  news: [],
  activeNews: null,
  comments: [],
}


const slice = createSlice({
  name: `news`,
  initialState,
  reducers: {
    setNewsIdList(state, action) {
      if (state.newsIdList[0] !== action.payload[0]) {

        state.newsIdList = action.payload
      }
    },
    setNewsItem(state, action) {
      state.news = [...state.news, action.payload]
    },
    setActiveNews(state, action) {
      if (!state.activeNews) {
        state.activeNews = action.payload
      } else if (state.activeNews.descendants !== action.payload.descendants) {
        state.activeNews = action.payload
      }
    },
    clearActiveNews(state) {
      state.activeNews = null
    },
    setComment(state, action) {
      state.comments = [...state.comments, action.payload]
    },
  }
})


export const {
  setNewsIdList,
  setNewsItem,
  setActiveNews,
  clearActiveNews,
  setComment,
} = slice.actions


export const getItem = (id, callback, setter) => async (dispatch, _, api) => {
  const res = await api.get(`/item/${id}.json`)
  if (res && res.data) {
    if (res.data.deleted) {
      return
    }
    dispatch(slice.actions[callback](res.data))
    setter && setter(res.data)
  }
}

export const getNewsIdList = () => async (dispatch, _, api) => {
  const res = await api.get(`/newstories.json`)
  const idList = res.data.slice(0, PAGE_SIZE)
  dispatch(setNewsIdList(idList))
  dispatch(setInitialized(true))
}


export default slice.reducer