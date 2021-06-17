import { configureStore } from '@reduxjs/toolkit';
import decksReducer from './slices/decksSlice';
import vendorsReducer from './slices/vendorsSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    decks: decksReducer,
    vendors: vendorsReducer,
    user: userReducer
  }
});

export default store;