import { createSlice } from "@reduxjs/toolkit";

const initialColorState = {
  primaryColor: "#43B6FA",
  secondaryColor: "#4A7EF6",
  buttonTextPrimaryColor: "#FFFFFF",
  buttonTextSecondaryColor: "#1B2767",
  titleColor: "#1B2767",
  secondaryFirstColor: "#FB896B",
  secondarySecondColor: "#97E9BC",
  secondaryThirdColor: "#523EF1",
  secondaryFourthColor: "#E0BE68",
};

const brandColorSlice = createSlice({
  name: "brandColors",
  initialState: { value: initialColorState },
  reducers: {
    setBrandColor: (state, action) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = initialColorState;
    },
  },
});

export const { setBrandColor, reset } = brandColorSlice.actions;

export default brandColorSlice.reducer;
