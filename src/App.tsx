import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import GlobalStyles from './styles/globalStyles'
import Routes from './routes'

import { store, persistor } from './store'

const App: React.FC = () => (
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <GlobalStyles />
        <Routes />
      </PersistGate>
    </Provider>
  </BrowserRouter>
)

export default App
