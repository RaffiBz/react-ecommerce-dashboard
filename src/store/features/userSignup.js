import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  checkbox: "",
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  phoneNumber: "",
  username: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateValues },
  reducers: {
    userSignUp: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { userSignUp } = userSlice.actions;

export default userSlice.reducer;
