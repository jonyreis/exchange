import { combineReducers } from 'redux'
import userReducer from './userAuth/reducer'
import balancesReducer from './balances/reducer'

export default combineReducers({
  user: userReducer,
  balances: balancesReducer,
})
