import shortid from 'shortid';
import { createAction } from '@reduxjs/toolkit';
let today = new Date;
const sendMessage = createAction('messages/send', text => ({
    payload: {
      id: shortid.generate(),
      text,
      time: `${today.getHours()}:${today.getMinutes()}`
    },
  }));

const deleteMesssage = createAction('messages/delete');

const messagesActions = { sendMessage, deleteMesssage };

export default messagesActions;