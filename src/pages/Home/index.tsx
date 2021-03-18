import React from 'react'
import { useSelector } from 'react-redux'

import appFire from '../../firebase'
import 'firebase/auth'

import { IUser } from '../../store/modules/userAuth/types'
import { IState } from '../../store'

const Home: React.FC = () => {
  const userAuthenticated = useSelector<IState, IUser>((state) => state.userAuth.user);

  React.useEffect(() => {
    console.log(userAuthenticated)
    appFire.auth().onAuthStateChanged(user => {
      if (user) {
        console.log(user.email)
      } else {
      }
    })
  }, [])

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
