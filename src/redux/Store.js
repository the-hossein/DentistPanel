import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/UserSlice";
import logger from "redux-logger";
import thunk from "redux-thunk";
export const store = configureStore({
  reducer: {
    userSlice: userSlice,
  },
  middleware: [logger, thunk],
});
