import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './slices/cartSlice';
import { selectedSlice } from './slices/selectedSlice';

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    select: selectedSlice.reducer,
  },
});
