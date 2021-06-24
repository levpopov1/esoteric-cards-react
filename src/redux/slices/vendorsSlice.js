import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../lib/API';

// Async Thunks
export const fetchVendors = createAsyncThunk('vendors/fetchVendors', async () => API.get("/vendors"));

// Slice
const vendorsSlice = createSlice({
  name: 'vendors',
  initialState: {
    error: null,
    status: 'idle',
    data: [],
    currentVendor: {}
  },
  reducers: {
    addVendor: (state, action) => {
      state.data.push(action.payload);
    },
    removeVendor: (state, action) => {
      state.data.filter(vendor => vendor.id !== action.payload);
    },
    setCurrentVendor: (state, action) => {
      state.currentVendor = state.data.find(vendor => vendor.slug === action.payload);
    }
  },
  extraReducers: {
    [fetchVendors.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchVendors.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.data = action.payload;
    },
    [fetchVendors.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
  }
});

// Actions
export const { addVendor, removeVendor, setCurrentVendor } = vendorsSlice.actions;

// Selectors
export const selectAllVendors = (state) => state.vendors.data;
export const selectVendorById = (state, id) => state.vendors.data.find(vendor => vendor.id === id);
export const selectPlayingCardVendors = (state) => state.vendors.data.filter(vendor => vendor.category === "Playing Cards");
export const selectCardGameVendors = (state) => state.vendors.data.filter(vendor => vendor.category === "Card Games");
export const selectTarotCardVendors = (state) => state.vendors.data.filter(vendor => vendor.category === "Tarot Cards");

// Reducers
export default vendorsSlice.reducer;