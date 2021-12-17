import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import messagesReducer from './message/reducer';
import {
//   persistStore,
//   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ];

export const store = configureStore({
    reducer: {
      messages: messagesReducer,
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
});