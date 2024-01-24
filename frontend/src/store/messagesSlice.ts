import {createSlice} from "@reduxjs/toolkit";
import {UserPageProps} from "../types";
import {createMessages} from "./messagesThunks";
import {RootState} from "../app/store";

interface MessagesState{
  createLoading: boolean;
  data: UserPageProps [];
  fetchLoading: boolean;
}

const initialState: MessagesState = {
  createLoading: false,
  data: [],
  fetchLoading: false,
}

export const messagesSlice = createSlice({
  name: 'messages',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createMessages.pending, (state) => {
      state.createLoading = true;
    });
    builder.addCase(createMessages.fulfilled, (state) => {
      state.createLoading = false;
    });
    builder.addCase(createMessages.rejected, (state) => {
      state.createLoading = false;
    });
  }
});
export const messagesReducer = messagesSlice.reducer;
export const loadingCreate = (state: RootState) => state.messages.createLoading;