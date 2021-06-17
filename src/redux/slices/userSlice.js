import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import makeAPIRequest from '../makeAPIRequest';

// Async Thunks
export const loginUser = createAsyncThunk('decks/fetchDecks', async (requestOptions) => makeAPIRequest("/login", requestOptions));

// Slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    error: null,
    status: 'idle',
    accessToken: ""
  },
  reducers: {
    // setRefreshToken: (state, action) => {
    //   state.accessToken.push(action.payload);
    // }
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
// export const { addDeck, removeDeck } = userSlice.actions;

// Selectors
export const selectAccessToken = (state) => state.user.accessToken;

// Reducers
export default userSlice.reducer;