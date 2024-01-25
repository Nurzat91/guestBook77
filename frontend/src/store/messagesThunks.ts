import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../axiosApi";
import {ApiUserPageProps, UserPage, UserPageProps} from "../types";
import {AppDispatch} from "../app/store";

export const createMessages = createAsyncThunk<void,UserPageProps>(
  'messages/create',
  async (data) => {
    await axiosApi.post('/messages', data)
  }
);

export const fetchMessages = createAsyncThunk<UserPage[], undefined, {dispatch: AppDispatch}>(
  'messages/fetch',
  async () => {
    const dataResponse = await axiosApi.get<ApiUserPageProps | null>('/messages');
    const fetchDataResponse = dataResponse.data;

    let messagesList: UserPage[] = [];

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