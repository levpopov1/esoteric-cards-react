import { configureStore } from '@reduxjs/toolkit';
import decksReducer from './slices/decksSlice';
import vendorsReducer from './slices/vendorsSlice';

const store = configureStore({
  reducer: {
    decks: decksReducer,
    vendors: vendorsReducer
  }
});

export default store;