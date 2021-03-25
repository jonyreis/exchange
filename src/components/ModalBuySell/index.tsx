import React from 'react'
import { useDispatch } from 'react-redux'
import { Form, Field } from 'react-final-form'
import { currency } from '../../utils/currency'

import { getBitcoin, getBritas } from './getApiFunctions'

import { BuySellContainer, TabContainer } from './styles'
import { IBitcoin, IBritas } from './types'

const ModalBuySell: React.FC = () => {
  const [buttonA, setButtonA] = React.useState<'' | 'active'>('active')
  const [buttonB, setButtonB] = React.useState<'' | 'active'>('')
  const [isSelect, setIsSelect] = React.useState(true)

  const [inputAmount, setInputAmount] = React.useState('')

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

  React.useEffect(() => {
    getBritas(setBritas)
    getBitcoin(setBitcoin)
  }, [])

  function handleSelectOn() {
    setIsSelect(true)
    setButtonA('active')
    setButtonB('')
  }
  function handleSelectOff() {
    setIsSelect(false)
    setButtonA('')
    setButtonB('active')
  }

  function handleBuy(values: { cripto: string }) {
    switch (values.cripto) {
      case 'bitcoin':
        dispatch({
          type: 'BUY_BITCOIN_WITH_REAL',
          payload: { preco: bitcoin.buy, quantidade: Number(inputAmount) }
        })
        dispatch({
          type: 'LOG_BUY_BITCOIN_WITH_REAL',
          payload: { preco: bitcoin.buy, quantidade: Number(inputAmount) }
        })
        setInputAmount('')
        break

      default:
        break
    }
  }

  function handleSell() {
    console.log('Vender')
  }
  return (
    <BuySellContainer>
      <TabContainer>
        <button type="button" onClick={handleSelectOn} className={buttonA}>
          Comprar
        </button>
        <button type="button" onClick={handleSelectOff} className={buttonB}>
          Vender
        </button>
      </TabContainer>
      <Form
        onSubmit={isSelect ? handleBuy : handleSell}
        render={({ submitError, handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="cripto">Comprar:</label>
              <Field name="cripto" component="select" defaultValue="bitcoin">
                <option value="bitcoin">Bitcoin</option>
                <option value="britas">Britas</option>
                <option value="real">Real</option>
              </Field>
            </div>
            <Field name="quantidade">
              {({ input, meta }) => (
                <div className="field">
                  <label htmlFor="quantidade">Quantidade:</label>
                  <input
                    {...input}
                    onChange={e => setInputAmount(e.target.value)}
                    value={inputAmount}
                  />
                </div>
              )}
            </Field>
            <Field name="preco">
              {({ input, meta }) => (
                <div className="field">
                  <label htmlFor="preco">Preço (BRL):</label>
                  <input value={currency(bitcoin.buy, 2)} />
                </div>
              )}
            </Field>
            <Field name="total">
              {({ input, meta }) => (
                <div className="field">
                  <label htmlFor="total">Total:</label>
                  <input
                    value={
                      inputAmount &&
                      currency(Number(bitcoin.buy) * Number(inputAmount), 2)
                    }
                  />
                </div>
              )}
            </Field>
            <div className="container-button">
              <button type="submit" disabled={submitting}>
                {isSelect ? 'Comprar' : 'Vender'}
              </button>
            </div>
          </form>
        )}
      />
    </BuySellContainer>
  )
}

export default ModalBuySell
