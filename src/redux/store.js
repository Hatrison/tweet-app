import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { tweetsReducer } from './tweets/tweetsSlice';
import { followingReducer } from './following/followingSlice';
import { filterReducer } from './filter/filterSlice';

const persistConfig = {
  key: 'following',
  storage,
  whitelist: ['following'],
};

const persistedReducer = persistReducer(persistConfig, followingReducer);

export const store = configureStore({
  reducer: {
    tweets: tweetsReducer,
    filter: filterReducer,
    following: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
