import React from 'react'

import { Form, Field } from 'react-final-form'

import { BuySellContainer, TabContainer } from './styles'

const ModalBuySell: React.FC = () => {
  const [buttonA, setButtonA] = React.useState<'' | 'active'>('active')
  const [buttonB, setButtonB] = React.useState<'' | 'active'>('')
  const [isSelect, setIsSelect] = React.useState(true)

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

  function handleBuy() {
    console.log('Comprar')
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
              <Field name="cripto" component="select">
                <option>Bitcoin</option>
                <option>Bitras</option>
                <option>Real</option>
              </Field>
            </div>
            <Field name="quantidade">
              {({ input, meta }) => (
                <div className="field">
                  <label htmlFor="quantidade">Quantidade:</label>
                  <input {...input} type="number" />
                </div>
              )}
            </Field>
            <Field name="preco">
              {({ input, meta }) => (
                <div className="field">
                  <label htmlFor="preco">Preço (BRL):</label>
                  <input {...input} type="number" />
                </div>
              )}
            </Field>
            <Field name="total">
              {({ input, meta }) => (
                <div className="field">
                  <label htmlFor="total">Total:</label>
                  <input {...input} type="number" />
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
