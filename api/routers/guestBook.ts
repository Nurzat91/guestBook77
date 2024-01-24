import {Router} from 'express';

const guestBookRouter = Router();

guestBookRouter.get('/', async (req, res) => {
  res.send('messages get ');
});

guestBookRouter.post('/', async (req, res) => {
  res.send('Messages post');
});

export default guestBookRouter;