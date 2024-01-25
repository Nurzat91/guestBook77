import {Router} from 'express';
import fileDb from "../fileDb";
import {imagesUpload} from "../multer";

const guestBookRouter = Router();

guestBookRouter.get('/', async (req, res, next) => {
  try {
    const messages = await fileDb.getItems();
    res.send(messages);
  } catch (e) {
    next(e);
  }
});

guestBookRouter.post('/', imagesUpload.single('image'), async (req, res, next) => {
  try{
    const messages = {
      author:  req.body.author,
      description: req.body.description,
      image:  req.file ? req.file.fieldname : null,
    };

    const savedMessages = await fileDb.addItem(messages);
    res.send(savedMessages);
  }catch (e){
    next(e);
  }
});

export default guestBookRouter;