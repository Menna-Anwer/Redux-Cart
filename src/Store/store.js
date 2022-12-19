import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './Slices/cartSlice'
import uiSlice from './Slices/uiSlice'

export const store = configureStore({
  reducer: {
    ui : uiSlice,
    cart : cartSlice,
  },
})