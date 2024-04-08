import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: JSON.parse(localStorage.getItem("user"))
      ? JSON.parse(localStorage.getItem("user"))
      : null,
  },
  reducers: {
    logeduser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { logeduser } = userSlice.actions;

export default userSlice.reducer;
