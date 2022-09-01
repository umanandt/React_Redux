import { createSlice} from "@reduxjs/toolkit"


const intialValue = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter", // name could be anything - slice name
  initialState: intialValue,
  reducers: {
    // we have used four condition that's why we need
    increment(state) {
      // four function in reducer -
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; // action.amount
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});


export default counterSlice;