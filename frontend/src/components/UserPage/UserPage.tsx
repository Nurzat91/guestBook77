import React, {useState} from "react";
import {UserPageProps} from "../../types";
import {Card, Grid, TextField} from "@mui/material";
import { LoadingButton } from '@mui/lab';
import SaveIcon from '@mui/icons-material/Save';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {loadingCreate} from "../../store/messagesSlice";
import {createMessages} from "../../store/messagesThunks";
import FileInput from "../FileInput/FileInput";


const UserPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(loadingCreate);
  const [messages, setMessages] = useState<UserPageProps>({
    author: '',
    description: '',
    image: null,
  });

  const formSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createMessages(messages));

    setMessages({
      author: '',
      description: '',
      image: null,
    });
  };
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const {name, value} = e.target;
    setMessages(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, files} = e.target;
    if (files) {
      setMessages( prevState => ({
        ...prevState,
        [name]: files[0],
      }));
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <Grid container direction="column" sx={{mb: 3}}>
        <Card>
          <Grid item xs sx={{m: 2}}>
            <TextField
              required
              id="author" label="Author"
              name="author"
              value={messages.author}
              onChange={inputChangeHandler}
            />
          </Grid>
          <Grid item xs sx={{m: 2}}>
            <TextField
              required
              multiline rows={3}
              id="description" label="Description"
              name="description"
              value={messages.description}
              onChange={inputChangeHandler}
            />
          </Grid>
          <Grid item xs sx={{m: 2}}>
            <FileInput
              onChange={fileInputChangeHandler}
              name="image"
              label="Product image"
            />
          </Grid>
          <Grid item xs sx={{m: 2}}>
            <LoadingButton
              type="submit"
              color="primary"
              variant="contained"
              disabled={isLoading}
              loading={isLoading}
              loadingPosition="start"
              startIcon={<SaveIcon/>}
            >
              Create
            </LoadingButton>
          </Grid>
        </Card>
      </Grid>
    </form>
  );
};

export default UserPage;