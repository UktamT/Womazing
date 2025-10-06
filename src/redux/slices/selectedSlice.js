import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  index: 0,
  count: 1,
  color: 0,
};

export const selectedSlice = createSlice({
  name: 'select',
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.index = action.payload;
    },
    setCount: (state, action) => {
      state.count += 1;
    },
    minusCount: (state, action) => {
      if (state.count > 1) state.count -= 1;
    },
    setSelectedColor: (state, action) => {
      state.color = action.payload;
    },
  },
});

export const { setSelected, setCount, minusCount, setSelectedColor } = selectedSlice.actions;
