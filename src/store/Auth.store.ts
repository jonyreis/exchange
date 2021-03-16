import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: 'auth',
  initialState: {
    counter: 0,
    email: '',
    password: ''
  },

  reducers: {
    signIn(state) {
      state.counter += 1
    },
    signUp(state) {
      state.counter -= 1
    }
  }
})

export const { signIn, signUp } = auth.actions
export default auth.reducer
