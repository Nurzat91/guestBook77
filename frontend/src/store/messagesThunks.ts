import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {UserPageProps} from "../types";

export const createMessages = createAsyncThunk<void,UserPageProps>(
  'messages/create',
  async () => {
    await axiosApi.post('/messages')
  }
);

export const fetchMessages = createAsyncThunk(
  'messages/fetch',
  async () => {
    const dataResponse = await axiosApi.get('/messages');
    const fetchData = dataResponse.data;

    return fetchData;
  }
);