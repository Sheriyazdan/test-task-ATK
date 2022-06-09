import { configureStore } from '@reduxjs/toolkit'
import linkSlice from './slices/linkSlice'
import userSlice from './slices/userSlice'

export const store = configureStore({
    reducer: {
        userSlice,
        linkSlice,
    },
})