import { Reducer } from 'redux'

const INITIAL_STATE = {}

const userAuth: Reducer = (state = INITIAL_STATE, action) => {
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
