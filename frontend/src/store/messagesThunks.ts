import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {ApiUserPageProps, UserPageProps} from "../types";

export const createMessages = createAsyncThunk<void,UserPageProps>(
  'messages/create',
  async (data) => {
    await axiosApi.post('/messages', data)
  }
);

export const fetchMessages = createAsyncThunk<UserPageProps[], undefined>(
  'messages/fetch',
  async () => {
    const dataResponse = await axiosApi.get<ApiUserPageProps>('/messages');
    const fetchDataResponse = dataResponse.data;

    let messagesList: UserPageProps[] = [];

    if (fetchDataResponse) {
      messagesList = Object.keys(fetchDataResponse).map(key => {
        const data = fetchDataResponse[key];
        return {
          ...data,
          id: key,
        }
      });
    }
    return messagesList;
  }
);