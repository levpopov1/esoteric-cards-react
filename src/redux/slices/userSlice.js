import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import makeAPIRequest from '../../lib/makeAPIRequest';

// Async Thunks
export const loginUser = createAsyncThunk('user/loginUser', async (requestOptions) => makeAPIRequest("/decks", requestOptions));

// Slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    error: null,
    status: "idle",
    id: null,
    username: null,
    accessToken: null
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.accessToken = action.payload.accessToken;
    },
    clearUser: (state, action) => {
      state.id = null;
      state.username = null;
      state.accessToken = null;
    }
  },
  extraReducers: {
    [loginUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [loginUser.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.accessToken = action.payload;
    },
    [loginUser.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});

// Actions
export const { setUser, clearUser } = userSlice.actions;

// Selectors
export const selectAccessToken = (state) => state.user.accessToken;

// Reducers
export default userSlice.reducer;