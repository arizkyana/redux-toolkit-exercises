import { createSlice } from '@reduxjs/toolkit';

const ticketSlice = createSlice({
  name: 'ticket',
  initialState: {
    tickets: [],
    ticket: {},
  },
  reducers: {
    add(state, action) {
      state.tickets = action.payload;
    },
  },
});

export const { add } = ticketSlice.actions;

export default ticketSlice.reducer;
