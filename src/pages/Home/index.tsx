import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import appFire from '../../firebase'
import 'firebase/auth'

import { IUser } from '../../store/modules/userAuth/types'
import { IState } from '../../store'
import { addUserAuth } from '../../store/modules/userAuth/actions'
import { getBitcoin, getBritas } from './getApiFunctions'

import { HomeContainer } from './styles'

const Home: React.FC = () => {
  const userAuthenticated = useSelector<IState, IUser>((state) => state.userAuth.user);

  const [britas, setBritas] = React.useState({})
  const [bitcoin, setBitcoin] = React.useState({})

  const dispatch = useDispatch()
  const history = useHistory()

  function handleSignOut() {
    appFire.auth().signOut()
    dispatch(addUserAuth({
      email: "",
      password: ""
    }))
    history.push("/")
  }

  React.useEffect(() => {
    console.log(userAuthenticated)
    appFire.auth().onAuthStateChanged(user => {
      const json = JSON.stringify({ email: user?.email, password: user?.refreshToken });
      if (user) {
        dispatch(addUserAuth({
          email: String(user.email),
          password: user.refreshToken
        }))
        window.localStorage.setItem("persist:user", json);
      }
    })
  }, [])

  React.useEffect(() => {
    getBritas(setBritas)
    getBitcoin(setBitcoin)
  }, [])

  return (
    <HomeContainer>
      <header>
        <div className="container">
          <h1>Exchange</h1>
      <button onClick={handleSignOut}>SIgn Out</button>
    </div>
      </header>
    </HomeContainer>
  )
}

export default Home
