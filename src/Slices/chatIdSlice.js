import { createSlice } from "@reduxjs/toolkit";

export const chatIdSlice = createSlice({
  name: "friendId",
  initialState: {
    chatId: null,
  },
  reducers: {
    friendChatId: (state, action) => {
      state.chatId = action.payload;
    },
  },
});

export const { friendChatId } = chatIdSlice.actions;

export default chatIdSlice.reducer;
