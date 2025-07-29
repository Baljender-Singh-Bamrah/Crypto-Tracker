import { store } from "../app/store.js";
import { fetchCryptoAssets } from "../features/crypto/cryptoSlice.js";

export const startMockWebSocket = () => {
  // Initial fetch
  store.dispatch(fetchCryptoAssets());

  // Update every 30 seconds
  setInterval(() => {
    store.dispatch(fetchCryptoAssets());
  }, 30000);
}; 