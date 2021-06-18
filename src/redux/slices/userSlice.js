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
    accessToken: ""
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    clearAccessToken: (state, action) => {
      state.accessToken = "";
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
export const { setAccessToken, clearAccessToken } = userSlice.actions;

// Selectors
export const selectAccessToken = (state) => state.user.accessToken;

// Reducers
export default userSlice.reducer;