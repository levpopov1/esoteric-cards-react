import { createSlice } from '@reduxjs/toolkit';

// Slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    accessToken: ""
  },
  reducers: {
    setAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    clearAccessToken: (state, action) => {
      state.accessToken = "";
    }
  }
});

// Actions
export const { setAccessToken, clearAccessToken } = userSlice.actions;

// Selectors
export const selectAccessToken = (state) => state.user.accessToken;

// Reducers
export default userSlice.reducer;