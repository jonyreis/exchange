import React from 'react'
import { useDispatch } from 'react-redux'

import appFire from '../../firebase'
import 'firebase/auth'

import BuyCripto from '../../components/BuyCripto'

import { HomeContainer } from './styles'
import Transactions from '../../components/Transactions'
import Balances from '../../components/Balances'

const Home: React.FC = () => {
  const dispatch = useDispatch()

  function handleSignOut() {
    appFire.auth().signOut()
    dispatch({
      type: 'REMOVE_USER_AUTH',
      payload: {
        email: '',
        password: ''
      }
    })
    dispatch({
      type: 'SIGN_OUT_BALANCES'
    })
    dispatch({
      type: 'SIGN_OUT_LOGS'
    })
  }

  return (
    <HomeContainer>
      <header>
        <div className="container">
          <h1>Exchange</h1>
          <button type="button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </header>
      <main>
        <div className="width-more-960">
          <Balances />
          <div className="buy-sell-transactions">
            <BuyCripto />
            <Transactions />
          </div>
        </div>

        <div className="width-less-960">
          <div className="balances-buycripto">
            <Balances />
            <BuyCripto />
          </div>
          <Transactions />
        </div>
      </main>
    </HomeContainer>
  )
}

export default Home
