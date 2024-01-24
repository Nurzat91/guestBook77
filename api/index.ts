import express from 'express';
import cors from 'cors';
import guestBookRouter from "./routers/guestBook";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

app.use('/products', guestBookRouter);

app.listen(port, () => {
  console.log(`Server started on ${port} port!`);
});