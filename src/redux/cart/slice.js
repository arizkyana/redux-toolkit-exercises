import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    carts: [],
  },
  reducers: {
    add(state, action) {
      const currentCarts = [...state.carts];
      currentCarts.push({ ...action.payload });
      state.carts = currentCarts;
    },
    remove(state, action) {
      const currentCarts = [...state.carts];
      const productId = action.payload;
      const filtered = currentCarts.filter((item) => item.id !== productId);
      state.carts = filtered;
    },
  },
});

export const { add, remove } = cartSlice.actions;

export default cartSlice.reducer;
