import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: {},
};

export const selectedSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    setSelected: (state, action) => {
      const { productId, sizeIndex } = action.payload;
      state.products[productId] = {
        ...state.products[productId],
        selectedSize: sizeIndex,
      };
    },
    setSelectedColor: (state, action) => {
      const { productId, colorIndex } = action.payload;
      state.products[productId] = {
        ...state.products[productId],
        selectedColor: colorIndex,
      };
    },
    setCount: (state, action) => {
      const { productId } = action.payload;
      const current = state.products[productId]?.count || 1;
      state.products[productId] = {
        ...state.products[productId],
        count: current + 1,
      };
    },
    minusCount: (state, action) => {
      const { productId } = action.payload;
      const current = state.products[productId]?.count || 1;
      if (current > 1) {
        state.products[productId] = {
          ...state.products[productId],
          count: current - 1,
        };
      }
    },
  },
});

export const { setSelected, setSelectedColor, setCount, minusCount } = selectedSlice.actions;
export default selectedSlice.reducer;
