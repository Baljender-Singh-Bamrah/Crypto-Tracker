import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "../features/crypto/cryptoSlice.js";

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
}); 