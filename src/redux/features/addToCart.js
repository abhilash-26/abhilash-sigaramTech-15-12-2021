import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const allItemInCart = createSlice({
  name: "cart",
  initialState: {
    value: {
      cartItems: initialState,
    },
  },
  reducers: {
    setAddToCart: (state, action) => {
      state.value.cartItems = action.payload;
    },
  },
});

export const { setAddToCart } = allItemInCart.actions;

export default allItemInCart.reducer;
