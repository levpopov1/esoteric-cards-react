import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../lib/API';

// Async Thunks
export const fetchDecks = createAsyncThunk('decks/fetchDecks', async () => API.get('/decks'));

const deckBlueprint = {
  name: '',
  vendor: '',
  cards: [],
};

// Slice
const decksSlice = createSlice({
  name: 'decks',
  initialState: {
    error: null,
    status: 'idle',
    data: [],
    rng: 0,
  },
  reducers: {
    addDeck: (state, action) => {
      state.data.push(action.payload);
    },
    removeDeck: (state, action) => {
      state.data.filter((deck) => deck.id !== action.payload);
    },
    incrementRng: (state, action) => {
      state.rng = action.payload;
    },
  },
  extraReducers: {
    [fetchDecks.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchDecks.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    [fetchDecks.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

// Actions
export const { addDeck, removeDeck, incrementRng } = decksSlice.actions;

// Selectors
export const selectAllDecks = (state) => state.decks.data;
export const selectDeckById = (state, id) => state.decks.data.find((deck) => deck.id === id);
export const selectDeckByVendorName = (state, vendorName) =>
  state.decks.data.filter((deck) => deck.vendor === vendorName);
export const selectDeckByCategoryName = (state, categoryName) =>
  state.decks.data.filter((deck) => deck.category === categoryName);
export const selectDeckByRouteParams = (state, params) => {
  return (
    state.decks.data.find(
      (deck) => deck.vendor_slug === params.vendor && deck.slug === params.deck
    ) || deckBlueprint
  );
};
export const selectRandomDeck = (state) => {
  let rng = Math.floor(Math.random() * (state.decks.data.length - 1));
  return state.decks.data[rng] || deckBlueprint;
};

// Reducers
export default decksSlice.reducer;
