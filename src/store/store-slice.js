import { createSlice } from "@reduxjs/toolkit";

const storeInitialState = {
  stockItems: [
    {
      name: 'guitar1',
      id: 0,
      price: 25000
    },
    {
      name: 'guitar2',
      id: 1,
      price: 12000
    },
    {
      name: 'guitar3',
      id: 2,
      price: 34000
    },
    {
      name: 'guitar4',
      id: 3,
      price: 60000
    },
  ],
  cartItems: [],
  billAmount:0
}; 

const updateArrays = (state,action, fromA, toB) => {
  state[fromA] = [action.payload.item ,...state[fromA]]; 
  state[toB].splice(state[toB].findIndex(i => i.id === action.payload.item.id ),1);
  state.billAmount = state.cartItems.reduce((acc,cu)=> acc + cu.price, 0);
}
const storeSlice = createSlice({
  name: 'storeState',
  initialState: storeInitialState,
  reducers:{
    addToCart(state,action){
      updateArrays(state, action, 'cartItems','stockItems' ); 
    }, 
    removeFromCart(state,action){
      updateArrays(state, action, 'stockItems','cartItems' ); 
    },
  }
}); 

export default storeSlice;