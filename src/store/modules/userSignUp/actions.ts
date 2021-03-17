import { IUser } from "./types";

export function addUserSignUp(user: IUser) {
  return {
    type: 'ADD_USER_SIGNUP',
    payload: {
      user,
    }
  };
};
