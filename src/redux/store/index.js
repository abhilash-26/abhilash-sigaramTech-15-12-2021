import { configureStore } from "@reduxjs/toolkit";
import cart from "../features/addToCart";

const store = configureStore({
  reducer: {
    cart: cart,
  },
});

export default store;
