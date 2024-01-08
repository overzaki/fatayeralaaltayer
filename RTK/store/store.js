import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productReducer";
import cartReducer from "../slices/cartReducer";

const store = configureStore({
  reducer: {
    cartList: cartReducer,
    products: productReducer,
  },
});

export default store;