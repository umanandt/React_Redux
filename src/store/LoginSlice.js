import {createSlice} from "@reduxjs/toolkit"

const initialAuthValue = { isAuthenticated: false };

const loginSlice = createSlice({
  name: "auth",
  initialState: initialAuthValue,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
});


export default loginSlice;