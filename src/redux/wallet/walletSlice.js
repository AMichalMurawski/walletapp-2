import { createSlice } from '@reduxjs/toolkit';
import { getTransactions } from './walletThunk';

const initialState = {
  id: null,
  balance: 0,
  transactions: [],
  categories: [],
  isRefreshing: false,
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  extraReducers: builder => {
    builder.addCase(getTransactions.fulfilled, (state, action) => {
      state.transactions = action.payload.transactions;
      state.balance = action.payload.balance;
    });
  },
});

export const walletReducer = walletSlice.reducer;
