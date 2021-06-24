import { createSlice } from '@reduxjs/toolkit';
import API from '../../lib/makeAPIRequest';

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
      API.setToken(action.payload.accessToken);
    },
    clearUser: (state, action) => {
      state.id = null;
      state.username = null;
      state.accessToken = null;
    }
  }
});

// Actions
export const { setUser, clearUser } = userSlice.actions;

// Selectors
export const selectAccessToken = (state) => state.user.accessToken;
export const selectUser = (state) => ({ id: state.user.id, username: state.user.username, accessToken: state.user.accessToken });

// Reducers
export default userSlice.reducer;