import { createSlice } from "@reduxjs/toolkit";
import fetchData from "../actions/Products";


let initialState = {
  list: null,
  categories: null,
  loading: false,
  error: null,
};



const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.list = action.payload.productsList;
        state.categories = action.payload.categoriesList;
      })

  },
});
export { fetchData };
export default productSlice.reducer;


