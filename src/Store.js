import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/Reducers"; 

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
