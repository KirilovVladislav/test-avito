import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  initialized: false,
  error: null,
}


const slice = createSlice({
  name: `app`,
  initialState,
  reducers: {
    setInitialized(state, action) {
      state.initialized = action.payload
    },
    setError(state, action) {
      state.error = action.payload
    },
  }
})


export const {
  setInitialized,
  setError,
} = slice.actions

export default slice.reducer

