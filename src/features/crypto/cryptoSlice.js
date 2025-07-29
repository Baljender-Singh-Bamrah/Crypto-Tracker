import { createSlice } from '@reduxjs/toolkit';
import { fetchCryptoData } from '../../services/cryptoAPI.js';

const initialState = {
  assets: [],
  loading: false,
  error: null
};

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    updateAssets(state, action) {
      state.assets = action.payload;
    }
  }
});

export const { setLoading, setError, updateAssets } = cryptoSlice.actions;

// Thunk for fetching crypto data
export const fetchCryptoAssets = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    dispatch(setError(null));
    const data = await fetchCryptoData();
    dispatch(updateAssets(data));
  } catch (error) {
    dispatch(setError('Failed to fetch cryptocurrency data'));
    console.error('Error fetching crypto data:', error);
  } finally {
    dispatch(setLoading(false));
  }
};

export default cryptoSlice.reducer; 