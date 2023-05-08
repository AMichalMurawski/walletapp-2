import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://wallet-api.herokuapp.com/api';
axios.defaults.withCredentials = true;

let accessToken = '';

axios.interceptors.request.use(
  config => {
    config.headers.Authorization = 'Bearer ' + accessToken;
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const getToken = token => {
  accessToken = token;
};

export const signup = createAsyncThunk(
  'auth/sign-up',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('auth/sign-up', credentials);
      getToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signin = createAsyncThunk(
  'auth/sign-in',
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post('auth/sign-in', credentials);
      getToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signout = createAsyncThunk(
  'auth/sign-out',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('auth/sign-out');
      getToken('');
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshTokens = createAsyncThunk(
  'auth/refresh-tokens',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('auth/refresh-tokens');
      getToken(response.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
export const resendVerification = createAsyncThunk(
  'users/verify',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/verify', credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
