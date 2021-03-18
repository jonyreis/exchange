import React from 'react'
import { useHistory } from 'react-router-dom'

import appFire from '../../firebase'
import 'firebase/auth'

import { IUser } from '../../store/modules/userAuth/types'
import { IState } from '../../store'

const Home: React.FC = () => {
  const userAuthenticated = useSelector<IState, IUser>((state) => state.userAuth.user);

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
