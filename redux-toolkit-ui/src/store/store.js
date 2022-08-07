import { configureStore } from '@reduxjs/toolkit'
import UserSlice from '../features/user/UserSlice'
import todoSlice from '../features/todo/todoSlice'

export const store = configureStore({
  reducer: {
    user: UserSlice,
    todo: todoSlice
  },
})