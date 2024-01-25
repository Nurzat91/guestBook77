
import {promises as fs} from 'fs';
import crypto from 'crypto';
import {Messages, MessagesWithoutId} from "./types";

const fileName = './db.json';
let data: Messages [] = [];

const fileDb = {
  async init() {
    try{
      const fileContents = await fs.readFile(fileName); //читаем readFile
      data = JSON.parse(fileContents.toString());
    }catch (e){
      data = [];
    }
  },
  async getItems() {
    return data;
  },
  async addItem(item: MessagesWithoutId) {
    const id = crypto.randomUUID();
    const messages = {id, ...item};
    data.push(messages);
    await this.save();

    return messages;
  },
  async save() {
    return fs.writeFile(fileName, JSON.stringify(data));
  }
};

export default fileDb;
