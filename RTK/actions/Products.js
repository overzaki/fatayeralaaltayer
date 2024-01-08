import { createAsyncThunk } from "@reduxjs/toolkit";
import { categoriesList, productsList } from "../../src/constants/dummyData";
// Create an async thunk to fetch data from an API
const fetchData = createAsyncThunk('products/fetchData', async () => {
    try {
      const data = { categoriesList, productsList };
      return data;
    } catch (error) {
      throw error;
    }
  });

export default fetchData;