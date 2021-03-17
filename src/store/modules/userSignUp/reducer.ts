import { IUsers, IUser } from './types';

const INITIAL_STATE: IUser[] = []

export function userSignUp(state = INITIAL_STATE, action: { type: string; payload: any; }) {
  switch (action.type) {
    case 'ADD_USER_SIGNUP': {
      return [...state, action.payload]
    }

    default: {
      return state;
    }
  }
};

export default userSignUp;
