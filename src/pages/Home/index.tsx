import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import appFire from '../../firebase'
import 'firebase/auth'

import { addUserAuth } from '../../store/modules/userAuth/actions'
import { getBitcoin, getBritas } from './getApiFunctions'

import { HomeContainer } from './styles'
import { IBitcoin, IBritas } from './types'

const Home: React.FC<any> = () => {
  const [britas, setBritas] = React.useState<IBritas>(
    {
      cotacaoCompra: 0,
      cotacaoVenda: 0,
      dataHoraCotacao: ""
    }
  )
  const [bitcoin, setBitcoin] = React.useState<IBitcoin>(
    {
      buy: "",
      date: 0,
      high: "",
      last: "",
      low: "",
      open: "",
      sell: "",
      vol: "",
    },
  )

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
      <main>
        <div className="currency">
          <h2>Bitcoin</h2>
          <h3>{Number(bitcoin.buy).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
        </div>
        <div className="currency">
          <h2>Britas</h2>
          <h3>{Number(britas.cotacaoCompra).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h3>
        </div>
      </main>
    </HomeContainer>
  )
}

export default Home
