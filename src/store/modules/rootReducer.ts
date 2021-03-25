import { combineReducers } from 'redux'
import userReducer from './userAuth/reducer'
import balancesReducer from './balances/reducer'
import transactionsReducer from './transactions/reducer'

export default combineReducers({
  user: userReducer,
  balances: balancesReducer,
  transactions: transactionsReducer
})
