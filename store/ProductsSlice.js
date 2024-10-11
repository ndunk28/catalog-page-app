import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchProductsApi, fetchProductByIdApi } from '../lib/api';

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  const response = await fetchProductsApi();
  return response.data;
});

export const fetchProductById = createAsyncThunk('products/fetchProductById', async (id) => {
  const response = await fetchProductByIdApi(id);
  return response.data;
});

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    currentProduct: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentProduct = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productsSlice.reducer;