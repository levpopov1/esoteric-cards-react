import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const API_URL = 'http://localhost:5000/api/v1';

const vendorsSlice = createSlice({
  name: 'vendors',
  initialState: {
    error: null,
    isLoading: false,
    vendors: []
  },
  reducers: {

  }
});

export const fetchVendors = createAsyncThunk('vendors/fetchVendors', async ()  => {
  const response = await fetch(API_URL + "/vendors");
  const data = await response.json();
  return data;
})


export default vendorsSlice.reducer;

// Selectors
export const selectAllVendors = (state) => state.vendors;
export const selectVendorById = (state, id) => state.vendors.find(vendor => vendor.id === id);