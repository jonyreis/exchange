import { applyMiddleware, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

import { IUserAuthState } from './modules/userAuth/types';
import rootReducer from './modules/rootReducer';
export interface IState {
  userAuth: IUserAuthState;
}

const persistConfig = {
  key: 'user',
  storage,
  whitelist: ["userAuth"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(thunk);
const store: any = createStore(persistedReducer, middleware);
const persistor = persistStore(store);

export { store, persistor };
