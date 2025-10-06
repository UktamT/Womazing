import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  discount: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addCart: (state, action) => {
      const exist = state.items.find((i) => i.id === action.payload.id);
      if (exist) {
        exist.count += 1;
        exist.totalPrice = exist.count * exist.price;
      } else {
        state.items.push(action.payload);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    setDiscount: (state, action) => {
      state.discount = state.discount + action.payload;
    },
  },
});

export const { addCart, removeItem, setDiscount } = cartSlice.actions;
