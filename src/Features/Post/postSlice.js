import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: "1", title: "Learning Redux ToolKit", content: "Sample Content" },
  { id: "2", title: "Learning Redux ToolKit two", content: "Second Content" },
]

export const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {

  },
})

// Action creators are generated for each case reducer function
export const { } = postSlice.actions

export default postSlice.reducer