import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://wallet-api.herokuapp.com/api';
axios.defaults.baseURL = 'http://localhost:3030/api';
axios.defaults.withCredentials = true;

const STORAGE_ACCESS_TOKEN = 'accessToken';

axios.interceptors.request.use(
  config => {
    config.headers = {
      Authorization:
        'Bearer ' + JSON.parse(localStorage.getItem(STORAGE_ACCESS_TOKEN)),
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    };
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

export const getTransactions = createAsyncThunk(
  'wallet/getTransactions',
  async ({ walletId }, thunkAPI) => {
    try {
      const response = await axios.get(`wallet/${walletId}/transactions`);
      return response.data;
    } catch (error) {
      console.log('error');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
