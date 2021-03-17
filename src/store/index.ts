import { createStore } from 'redux';
import rootReducer from './modules/rootReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persist = persistReducer(persistConfig, rootReducer);
export const store: any = createStore(persist);
export const persistor = persistStore(store);
