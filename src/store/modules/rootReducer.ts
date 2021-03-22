import { combineReducers } from 'redux'
import userReducer from './userAuth/reducer'

export default combineReducers({
  user: userReducer
})
