import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../lib/API';

// Async Thunks
export const register = createAsyncThunk('auth/register', async (requestBody) =>
  API.post('/auth/register', requestBody)
);

export const login = createAsyncThunk('auth/login', async (requestBody) =>
  API.post('/auth/login', requestBody)
);

// local helpers
const persistToLocalStorage = (items) => {
  for (let key in items) {
    localStorage.setItem(key, items[key]);
  }
};

export const getUserFromLocalStorage = () => {
  return {
    id: localStorage.getItem('id'),
    username: localStorage.getItem('username'),
    accessToken: localStorage.getItem('accessToken'),
  };
};

const clearUserFromLocalStorage = () => {
  localStorage.removeItem('id');
  localStorage.removeItem('username');
  localStorage.removeItem('accessToken');
};

// Slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    error: null,
    status: 'idle',
    id: null,
    username: null,
    accessToken: null,
  },
  reducers: {
    clearUser: (state) => {
      state.id = null;
      state.username = null;
      state.accessToken = null;
      API.clearToken();
      clearUserFromLocalStorage();
    },
  },
  extraReducers: {
    [register.pending]: (state) => {
      state.status = 'loading';
    },
    [register.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      state.id = action.payload.user.id;
      state.username = action.payload.user.username;
      state.accessToken = action.payload.user.accessToken;
      API.setToken(action.payload.accessToken);
      persistToLocalStorage(action.payload.user);
    },
    [register.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
    [login.pending]: (state) => {
      state.status = 'loading';
    },
    [login.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.error = null;
      state.id = action.payload.user.id;
      state.username = action.payload.user.username;
      state.accessToken = action.payload.user.accessToken;
      API.setToken(action.payload.accessToken);
      persistToLocalStorage(action.payload.user);
    },
    [login.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

// Actions
export const { clearUser } = userSlice.actions;

// Selectors
export const selectAccessToken = (state) => state.user.accessToken;
export const selectUser = (state) => ({
  id: state.user.id,
  username: state.user.username,
  accessToken: state.user.accessToken,
});
export const selectUserStatus = (state) => ({
  error: state.user.error,
  status: state.user.status,
});

// Reducers
export default userSlice.reducer;
