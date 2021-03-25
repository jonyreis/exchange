import { Reducer } from 'redux'
import { IUser } from './types'

const INITIAL_STATE: IUser = {
  email: '',
  password: ''
}

const userAuth: Reducer<IUser> = (state = INITIAL_STATE, action) => {
  console.log(action.type, action.payload)
  switch (action.type) {
    case 'ADD_USER_AUTH': {
      return action.payload
    }
    case 'REMOVE_USER_AUTH': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default userAuth
