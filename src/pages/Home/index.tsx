import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import appFire from '../../firebase'
import 'firebase/auth'

import { getBitcoin, getBritas } from './getApiFunctions'

import ModalBuySell from '../../components/ModalBuySell'

import { HomeContainer } from './styles'
import { IBitcoin, IBritas } from './types'

const Home: React.FC = () => {
  const [britas, setBritas] = React.useState<IBritas>({
    cotacaoCompra: 0,
    cotacaoVenda: 0,
    dataHoraCotacao: ''
  })
  const [bitcoin, setBitcoin] = React.useState<IBitcoin>({
    buy: '',
    date: 0,
    high: '',
    last: '',
    low: '',
    open: '',
    sell: '',
    vol: ''
  })

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

  React.useEffect(() => {
    getBritas(setBritas)
    getBitcoin(setBitcoin)
  }, [])

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
        <div className="currency-container">
          <div className="currency">
            <h2>Bitcoin</h2>
            <h3>
              {Number(bitcoin.buy).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </h3>
          </div>
          <div className="currency">
            <h2>Britas</h2>
            <h3>
              {britas &&
                Number(britas.cotacaoCompra).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
            </h3>
          </div>
          <div className="currency">
            <h2>Reais</h2>
            <h3>
              {britas &&
                Number(britas.cotacaoCompra).toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}
            </h3>
          </div>
        </div>
        <ModalBuySell />
        <div className="container-transactions">
          <div />
        </div>
      </main>
    </HomeContainer>
  )
}

export default Home
