import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: 0,
  },
  reducers: {
    logeduser: (state, action) => {
      console.log(payload);
      state.value;
    },
  },
});

export const { logeduser } = userSlice.actions;

export default userSlice.reducer;
