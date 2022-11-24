import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./features/counter";
import setBrandColorReducer from "./features/setBrandColor";
import setIntroContentReducer from "./features/setIntroContent";
import socketIsConnectedReducer from "./features/socket";
import userSignUpReducer from "./features/userSignup";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    socket: socketIsConnectedReducer,
    brandColors: setBrandColorReducer,
    user: userSignUpReducer,
    introContent: setIntroContentReducer,
  },
});

export default store;
