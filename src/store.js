import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Slices/userSlice";
import chatIdSlice from "./Slices/chatIdSlice";

export default configureStore({
  reducer: { userSlice, chatIdSlice },
});
