// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const productsSlice = createSlice({
  name: 'products',
  initialState: { data: [] },
  reducers: {
    fetchSuccess: (state, action) => {
      state.data = action.payload;
      console.log("fetched")
    },
  },
});

export const { fetchSuccess } = productsSlice.actions;

export const fetchProducts = () => async (dispatch) => {
  try {
    const response = await axios.get('https://64c6affb0a25021fde91e1bf.mockapi.io/gmm/products');
    dispatch(fetchSuccess(response.data));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
  },
});

export default store;
