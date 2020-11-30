import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  newsIdList: [],
  news: [],
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
      state.news = [action.payload, ...state.news].slice(0, 5)
    },
    setComment(state, action) {
      state.comments = [...state.comments, action.payload]
    },
  }
})


export const {
  setNewsIdList,
  setNewsItem,
  setComment,
} = slice.actions


export const getNewsIdList = () => async (dispatch, _, api) => {
  const res = await api.get(`/newstories.json`)
  dispatch(setNewsIdList(res.data.slice(0, 5)))
}

export const getItem = (id, callback, actionType) => async (dispatch, _, api) => {
  const res = await api.get(`/item/${id}.json`)
  if (res && res.data) {
    if (res.data.deleted) {
      return
    }
    dispatch(slice.actions[actionType](res.data))
    callback(res.data)
  }
}


export default slice.reducer

