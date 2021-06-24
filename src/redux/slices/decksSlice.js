import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../lib/makeAPIRequest';

// Async Thunks
export const fetchDecks = createAsyncThunk('decks/fetchDecks', async () => API.get("/decks"));

// Slice
const decksSlice = createSlice({
  name: 'decks',
  initialState: {
    error: null,
    status: 'idle',
    data: []
  },
  reducers: {
    addDeck: (state, action) => {
      state.data.push(action.payload);
    },
    removeDeck: (state, action) => {
      state.data.filter(deck => deck.id !== action.payload);
    }
  },
  extraReducers: {
    [fetchDecks.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchDecks.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    [fetchDecks.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});

// Actions
export const { addDeck, removeDeck } = decksSlice.actions;

// Selectors
export const selectAllDecks = (state) => state.decks.data;
export const selectDeckById = (state, id) => state.decks.data.find(deck => deck.id === id);
export const selectDeckByVendorName = (state, vendorName) => state.decks.data.filter(deck => deck.vendor === vendorName);
export const selectDeckByCategoryName = (state, categoryName) => state.decks.data.filter(deck => deck.category === categoryName);

// Reducers
export default decksSlice.reducer;