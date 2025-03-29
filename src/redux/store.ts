import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice"; // Import the RTK Query slice
import { productApi } from "./service/productSlice"; // Import the product slice
import cartReducer from "./service/cartSlice"; // Import the cart slice

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer, // Add API reducer
    [productApi.reducerPath]: productApi.reducer, // ✅ Add moviesApi reducer
    cart: cartReducer, // ✅ Add cart reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(apiSlice.middleware)
      .concat(productApi.middleware), // Add API middleware
});

// Define RootState and AppDispatch types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
