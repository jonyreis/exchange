import { Reducer } from 'redux'
import { currency } from '../../../utils/currency'

interface ITransactions {
  date: string;
  coin: string;
  preco: string;
  quantidade: string;
  total: string;
}

const INITIAL_STATE: Array<ITransactions> = []

const transactions: Reducer<Array<ITransactions>> = (
  state = INITIAL_STATE,
  action
) => {
  console.log(action.type, action.payload)
  switch (action.type) {
    case 'LOG_BUY_BITCOIN_WITH_REAL': {
      const { price, amount } = action.payload
      const valorCompra = price * amount
      const timestamp = Date.now()

      const obj = {
        key: timestamp,
        date: timestamp,
        coin: 'BTC/BRL',
        price: `R$ ${currency(price, 2)}`,
        amount: `${amount} BTC`,
        total: `R$ ${currency(valorCompra, 2)}`
      }
      return [obj, ...state]
    }
    case 'LOG_BUY_BITCOIN_WITH_BRITAS': {
      const { price, amount } = action.payload
      const valorCompra = price * amount
      const timestamp = Date.now()

      const obj = {
        key: timestamp,
        date: timestamp,
        coin: 'BTC/BRI',
        price: `BRI$ ${currency(price, 2)}`,
        amount: `${amount} BTC`,
        total: `BRI$ ${currency(valorCompra, 2)}`
      }
      return [obj, ...state]
    }
    }
    default: {
      return state
    }
  }
}

export default transactions
