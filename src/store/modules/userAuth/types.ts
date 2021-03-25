export interface IUser {
  email: string
  password: string
  confirm?: string
}

export interface IUserAuthState {
  user: IUser
}
