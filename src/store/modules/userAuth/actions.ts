import { IUser } from "./types";

export function addUserAuth(user: IUser) {
  console.log(user)
  return {
    type: 'ADD_USER_AUTH',
    payload: {
      user,
    }
  };
};
