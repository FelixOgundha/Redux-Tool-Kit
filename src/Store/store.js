import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../Features/Counter/counterSlice'
import postReducer from '../Features/Post/postSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    posts: postReducer,
  },
})