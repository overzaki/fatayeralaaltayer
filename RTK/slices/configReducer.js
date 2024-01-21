import { createSlice } from "@reduxjs/toolkit";
import fetchData from "../actions/ConfigData";


let initialState = {
  defaultData: null,
};



const configSlice = createSlice({
  name: "configFile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.defaultData = action?.payload?.design;
      })

  },
});
export { fetchData };
export default configSlice.reducer;


