import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../slices/productReducer";
import configReducer from "../slices/configReducer";
import cartReducer from "../slices/cartReducer";

const store = configureStore({
  reducer: {
    cartList: cartReducer,
    products: productReducer,
    configration: configReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export default store;
