//import { createStore } from "redux";
import {configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./CounterSlice";
import loginSlice from "./LoginSlice";

// we are using configure store instead of create store
//because it can handle multiple reducer

//import { createReducer } from 'redux';
// there are two things that you can import
// createSlice & create reducer that is provided by
// redux toolkit to make coding easy and managebel
// npm install @reduxjs/toolkit



/* const counterReducer = (state = intialValue, action) => {
  if (action.type === "INCREMENT") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "DECREMENT") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toggle") {
    return {
      showCounter: !state.showCounter,
      counter: state.counter,
    };
  }
  return state;
};*/

//const store = createStore(counterSlice.reducer);

const store = configureStore({
  reducer: {counter: CounterSlice.reducer, auth: loginSlice.reducer},
});

export const counterActions = CounterSlice.actions;
export const loginActions = loginSlice.actions;

export default store;

// here we are not dispatching action to the data
//here we are not subcribing to the data
// here we have made reducer function and a store and passed the value of
// function to the store (create reducer)
