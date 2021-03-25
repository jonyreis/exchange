import { createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import rootReducer from './modules/rootReducer'

const persistConfig = {
  key: 'exchange',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer)
const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
export { store, persistor }
