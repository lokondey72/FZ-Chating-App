import { createSlice } from "@reduxjs/toolkit";

export const chatIdSlice = createSlice({
  name: "friendId",
  initialState: {
    friendInfo: null,
  },
  reducers: {
    friendChatId: (state, action) => {
      state.friendInfo = action.payload;
    },
  },
});

export const { friendChatId } = chatIdSlice.actions;

export default chatIdSlice.reducer;
