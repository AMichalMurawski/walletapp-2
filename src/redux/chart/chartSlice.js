import { createSlice } from '@reduxjs/toolkit';
import { transactionsSummary, changeMonth, changeYear } from './chartThunk';

const initialState = {
  categorySummary: [],
  incomeSummary: 0,
  expenseSummary: 0,
  periodTotal: 0,
  year: new Date().getFullYear(),
  month: new Date().getMonth(),
  isRefreshing: false,
};

const chartSlice = createSlice({
  name: 'chart',
  initialState,
  extraReducers: builder => {
    builder.addCase(changeMonth.fulfilled, (state, action) => {
      state.month = action.payload.month;
    });
    builder.addCase(changeYear.fulfilled, (state, action) => {
      state.year = action.payload.year;
    });
    builder.addCase(transactionsSummary.fulfilled, (state, action) => {
      state.categorySummary = action.payload.categorySummary;
      state.incomeSummary = action.payload.incomeSummary;
      state.expenseSummary = action.payload.expenseSummary;
      state.periodTotal = action.payload.periodTotal;
    });
  },
});

export const chartReducer = chartSlice.reducer;
