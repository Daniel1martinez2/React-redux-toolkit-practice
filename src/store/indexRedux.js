import { configureStore } from "@reduxjs/toolkit";
//Slices
import storeSlice from './store-slice'; 

const store = configureStore({
  reducer:{
    storeState: storeSlice.reducer
  }
}); 

export const storeActions = storeSlice.actions; 
export default store; 