import express from 'express';
import cors from 'cors';
import guestBookRouter from "./routers/guestBook";
import fileDb from "./fileDb";

const app = express();
const port = 8000;

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.use('/messages', guestBookRouter);


const run = async () => {
  await fileDb.init();

  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });
};
void run();