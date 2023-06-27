import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import homeEntries from './homeEntries';
import { getDefaultMiddleware } from '@reduxjs/toolkit';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, homeEntries);

export const store = configureStore({
  reducer: persistedReducer,
});
const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false
})
export const persistor = persistStore(store);