import { createSlice } from "@reduxjs/toolkit";

const initialContentState = {
  signinText:
    "Please input your information in the fields below to enter your Journey platform.",
  signupText:
    "We need you to help us with some basic information for your account creation. Here are our terms and conditins. Please read them carefully.",
  imageURL: "/images/signup.png",
};

const introContentSlice = createSlice({
  name: "introContent",
  initialState: { value: initialContentState },
  reducers: {
    setIntroContent: (state, action) => {
      state.value = action.payload;
    },
    resetContent: (state) => {
      state.value = initialContentState;
    },
  },
});

export const { setIntroContent, resetContent } = introContentSlice.actions;

export default introContentSlice.reducer;
