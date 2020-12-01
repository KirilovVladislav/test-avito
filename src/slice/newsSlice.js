import { createSlice } from '@reduxjs/toolkit'

const PAGE_SIZE = 100

const initialState = {
  newsIdList: [],
  news: [],
  activeNews: {},
  comments: [],
}


const slice = createSlice({
  name: `news`,
  initialState,
  reducers: {
    setNewsIdList(state, action) {
      state.newsIdList = action.payload
    },
    setNewsItem(state, action) {
      state.news = [...state.news, action.payload]
      state.news.sort((a, b) => b.id - a.id)
    },
    clearNews(state) {
      state.news = []
    },
    setActiveNews(state, action) {
      state.activeNews = action.payload
    },
    setComment(state, action) {
      state.comments = [...state.comments, action.payload]
    },
  }
})


export const {
  setNewsIdList,
  setNewsItem,
  clearNews,
  setActiveNews,
  setComment,
} = slice.actions


export const getNewsIdList = () => async (dispatch, _, api) => {
  const res = await api.get(`/newstories.json`)
  dispatch(setNewsIdList(res.data.slice(0, PAGE_SIZE)))
}

export const getItem = (id, actionType, callback) => async (dispatch, _, api) => {
  const res = await api.get(`/item/${id}.json`)
  if (res && res.data) {
    if (res.data.deleted) {
      return
    }
    dispatch(slice.actions[actionType](res.data))
    callback && callback(res.data)
  }
}


export default slice.reducer

