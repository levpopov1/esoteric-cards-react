import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import makeAPIRequest from '../makeAPIRequest';

// Async Thunks
export const fetchVendors = createAsyncThunk('vendors/fetchVendors', async () => makeAPIRequest("/vendors"));

// Slice
const vendorsSlice = createSlice({
  name: 'vendors',
  initialState: {
    error: null,
    status: 'idle',
    data: []
  },
  reducers: {
    addVendor: (state, action) => {
      state.data.push(action.payload);
    },
    removeVendor: (state, action) => {
      state.data.filter(vendor => vendor.id !== action.payload);
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
export const { addVendor, removeVendor } = vendorsSlice.actions;

// Selectors
export const selectAllVendors = (state) => state.vendors.data;
export const selectVendorById = (state, id) => state.vendors.data.find(vendor => vendor.id === id);

// Reducers
export default vendorsSlice.reducer;