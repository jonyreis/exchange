import React from 'react'
import { useDispatch } from 'react-redux'

import appFire from '../../firebase'
import 'firebase/auth'

import ModalBuySell from '../../components/ModalBuySell'

import { HomeContainer } from './styles'
import Transactions from '../../components/Transactions'
import Balances from '../../components/Balances'

const Home: React.FC = () => {
  const dispatch = useDispatch()

  function handleSignOut() {
    console.log('sair')
    appFire.auth().signOut()
    dispatch({
      type: 'REMOVE_USER_AUTH',
      payload: {
        email: '',
        password: ''
      }
    })
  }

  return (
    <HomeContainer>
      <header>
        <div className="container">
          <h1>Exchange</h1>
          <button type="button" onClick={handleSignOut}>
            SIgn Out
          </button>
        </div>
      </header>
      <main>
        <Balances />
        <div className="buy-sell-transactions">
          <ModalBuySell />
          <Transactions />
        </div>
      </main>
    </HomeContainer>
  )
}

export default Home
