import { Reducer } from 'redux'
import { currency } from '../../../utils/currency'
import { date } from '../../../utils/date'

interface ITransactions {
  key: number;
  date: string;
  coin: string;
  price: string;
  amount: string;
  total: string;
}

const INITIAL_STATE: Array<ITransactions> = []

const transactions: Reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOG_BUY_BITCOIN_WITH_REAL': {
      const { price, amount } = action.payload
      const valorCompra = price * amount
      const timestamp = Date.now()
      const dateNow = date()

      const obj = {
        key: timestamp,
        date: dateNow,
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
      const dateNow = date()

      const obj = {
        key: timestamp,
        date: dateNow,
        coin: 'BTC/BRI',
        price: `BRI$ ${currency(price, 2)}`,
        amount: `${amount} BTC`,
        total: `BRI$ ${currency(valorCompra, 2)}`
      }
      return [obj, ...state]
    }
    case 'LOG_BUY_BRITAS_WITH_REAL': {
      const { price, amount } = action.payload
      const valorCompra = price * amount
      const timestamp = Date.now()
      const dateNow = date()

      const obj = {
        key: timestamp,
        date: dateNow,
        coin: 'BRI/BRL',
        price: `R$ ${currency(price, 2)}`,
        amount: `${currency(amount, 0)} BRI`,
        total: `R$ ${currency(valorCompra, 2)}`
      }
      return [obj, ...state]
    }
    case 'LOG_BUY_BRITAS_WITH_BITCOIN': {
      const { price, amount } = action.payload
      const valorCompra = price * amount
      const timestamp = Date.now()
      const dateNow = date()

      const obj = {
        key: timestamp,
        date: dateNow,
        coin: 'BRI/BTC',
        price: `BTC ${currency(price, 8)}`,
        amount: `${currency(amount, 0)} BRI`,
        total: `BTC ${currency(valorCompra, 8)}`
      }
      return [obj, ...state]
    }
    case 'LOG_BUY_REAL_WITH_BITCOIN': {
      const { price, amount } = action.payload
      const valorCompra = price * amount
      const timestamp = Date.now()
      const dateNow = date()

      const obj = {
        key: timestamp,
        date: dateNow,
        coin: 'BRL/BTC',
        price: `BTC ${currency(price, 8)}`,
        amount: `${currency(amount, 0)} BRL`,
        total: `BTC ${currency(valorCompra, 8)}`
      }
      return [obj, ...state]
    }
    case 'LOG_BUY_REAL_WITH_BRITAS': {
      const { price, amount } = action.payload
      const valorCompra = price * amount
      const timestamp = Date.now()
      const dateNow = date()

      const obj = {
        key: timestamp,
        date: dateNow,
        coin: 'BRL/BRI',
        price: `BRI ${currency(price, 2)}`,
        amount: `${currency(amount, 0)} BRL`,
        total: `BRI ${currency(valorCompra, 2)}`
      }
      return [obj, ...state]
    }
    case 'SIGN_OUT_LOGS': {
      return [{}]
    }
    default: {
      return state
    }
  }
}

export default transactions
