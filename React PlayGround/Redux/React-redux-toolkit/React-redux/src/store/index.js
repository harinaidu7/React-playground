import { createStore } from "redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const INITIAL_VAL = {
  counter: 0,
  privacy: false
};

const counterSlice = createSlice({
  name:'count',
  initialState:{counterVal:0},
  reducers:{
    increment:(state)=>{
      state.counterVal++;
      

    },
    decrement:(state,action)=>{
      state.counterVal--;

    },
    add:(state,action)=>{
      state.counterVal += Number(action.payload)

    },
    subtract:(state,action)=>{
      state.counterVal -= Number(action.payload)
    }
  }
}) 

const privacySlice =createSlice({
  name: 'privacy',
  initialState: false,
  reducers:{
    toggle:(state)=>{
      return state = !state
    }
  }
})

// const counterReducer = (store = INITIAL_VAL, action) => {
//   if (action.type === "INCREMENT") {
//     return {...store, counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { ...store,counter: store.counter - 1 };
//   } else if (action.type === "ADD") {
//     return { ...store,counter: store.counter + Number(action.payload.num) };
//   } else if (action.type === "SUBTRACT") {
//     return { ...store,counter: store.counter - Number(action.payload.num) };
//   }else if(action.type === "PRIVACY_TOGGLE"){
//     return{...store,privacy: !store.privacy}
//   }
   
 
//   console.log("Actions received", action);

//   return store;
// };

const counterStore = configureStore({reducer:{
  counter: counterSlice.reducer,
  privacy: privacySlice.reducer
}});

export const counterActions = counterSlice.actions
export const privacyActions =  privacySlice.actions
export default counterStore;
