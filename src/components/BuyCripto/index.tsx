import React from 'react'
import { useDispatch } from 'react-redux'

import { getBitcoin, getBritas } from './getApiFunctions'
import Price from './Price'
import Total from './Total'

import { BuySellContainer } from './styles'
import { IBitcoin, IBritas } from './types'

const ModalBuySell: React.FC = () => {
  const [inputAmount, setInputAmount] = React.useState('')
  const [buyCriptoSelected, setBuyCriptoSelected] = React.useState('selecione')
  const [withCriptoSelected, setWithCriptoSelected] = React.useState(
    'selecione'
  )

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

  function handleSubmit(): void {
    const newCase = `${buyCriptoSelected}-${withCriptoSelected}`

    if (buyCriptoSelected === 'selecione') return
    if (withCriptoSelected === 'selecione') return
    if (inputAmount === '') return

    switch (newCase) {
      case 'bitcoin-real':
        dispatch({
          type: 'BUY_BITCOIN_WITH_REAL',
          payload: {
            price: Number(bitcoin.buy),
            amount: Number(inputAmount)
          }
        })
        dispatch({
          type: 'LOG_BUY_BITCOIN_WITH_REAL',
          payload: {
            price: Number(bitcoin.buy),
            amount: Number(inputAmount)
          }
        })
        setInputAmount('')
        break
      case 'bitcoin-britas':
        dispatch({
          type: 'BUY_BITCOIN_WITH_BRITAS',
          payload: {
            price: Number(Number(bitcoin.buy) / Number(britas.cotacaoCompra)),
            amount: Number(inputAmount)
          }
        })
        dispatch({
          type: 'LOG_BUY_BITCOIN_WITH_BRITAS',
          payload: {
            price: Number(Number(bitcoin.buy) / Number(britas.cotacaoCompra)),
            amount: Number(inputAmount)
          }
        })
        setInputAmount('')
        break
      case 'britas-real':
        dispatch({
          type: 'BUY_BRITAS_WITH_REAL',
          payload: {
            price: Number(britas.cotacaoCompra),
            amount: Number(inputAmount)
          }
        })
        dispatch({
          type: 'LOG_BUY_BRITAS_WITH_REAL',
          payload: {
            price: Number(britas.cotacaoCompra),
            amount: Number(inputAmount)
          }
        })
        setInputAmount('')
        break
      case 'britas-bitcoin':
        dispatch({
          type: 'BUY_BRITAS_WITH_BITCOIN',
          payload: {
            price: Number(britas.cotacaoCompra) / Number(bitcoin.buy),
            amount: Number(inputAmount)
          }
        })
        dispatch({
          type: 'LOG_BUY_BRITAS_WITH_BITCOIN',
          payload: {
            price: Number(britas.cotacaoCompra) / Number(bitcoin.buy),
            amount: Number(inputAmount)
          }
        })
        setInputAmount('')
        break
      case 'real-bitcoin':
        dispatch({
          type: 'BUY_REAL_WITH_BITCOIN',
          payload: {
            price: 1 / Number(bitcoin.buy),
            amount: Number(inputAmount)
          }
        })
        dispatch({
          type: 'LOG_BUY_REAL_WITH_BITCOIN',
          payload: {
            price: 1 / Number(bitcoin.buy),
            amount: Number(inputAmount)
          }
        })
        setInputAmount('')
        break
      case 'real-britas':
        dispatch({
          type: 'BUY_REAL_WITH_BRITAS',
          payload: {
            price: 1 / Number(britas.cotacaoCompra),
            amount: Number(inputAmount)
          }
        })
        dispatch({
          type: 'LOG_BUY_REAL_WITH_BRITAS',
          payload: {
            price: 1 / Number(britas.cotacaoCompra),
            amount: Number(inputAmount)
          }
        })
        setInputAmount('')
        break
      default:
        break
    }
  }

  return (
    <BuySellContainer>
      <form onSubmit={handleSubmit} className="animeTop">
        <div className="field">
          <label htmlFor="cripto">Comprar:</label>
          <select
            name="cripto"
            onChange={(event: { currentTarget: { value: string } }) =>
              setBuyCriptoSelected(event.currentTarget.value)
            }
          >
            <option value="selecione">Selecione</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="britas">Britas</option>
            <option value="real">Real</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="with">Com:</label>
          <select
            name="with"
            onChange={(event: { currentTarget: { value: string } }) =>
              setWithCriptoSelected(event.currentTarget.value)
            }
          >
            <option value="selecione">Selecione</option>
            {buyCriptoSelected !== 'bitcoin' && (
              <option value="bitcoin">Bitcoin</option>
            )}
            {buyCriptoSelected !== 'britas' && (
              <option value="britas">Britas</option>
            )}
            {buyCriptoSelected !== 'real' && <option value="real">Real</option>}
          </select>
        </div>
        <div className="field">
          <label htmlFor="quantidade">Quantidade:</label>
          <input
            onChange={e => setInputAmount(e.target.value)}
            value={inputAmount}
            type="number"
          />
        </div>

        <Price
          buyCriptoSelected={buyCriptoSelected}
          withCriptoSelected={withCriptoSelected}
          bitcoin={Number(bitcoin.buy)}
          britas={Number(britas.cotacaoCompra)}
        />

        <Total
          buyCriptoSelected={buyCriptoSelected}
          withCriptoSelected={withCriptoSelected}
          bitcoin={Number(bitcoin.buy)}
          britas={Number(britas.cotacaoCompra)}
          inputAmount={Number(inputAmount)}
        />

        <div className="container-button">
          <button
            type="submit"
            disabled={
              buyCriptoSelected === 'selecione' ||
              withCriptoSelected === 'selecione' ||
              buyCriptoSelected === withCriptoSelected
            }
          >
            Comprar
          </button>
        </div>
      </form>
    </BuySellContainer>
  )
}

export default ModalBuySell
