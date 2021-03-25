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
      const { preco, quantidade } = action.payload
      const valorCompra = preco * quantidade
      const timestamp = Date.now()
      const date = new Date(timestamp)

      const obj = {
        key: timestamp,
        date: timestamp,
        coin: 'BTC/BRL',
        preco: `R$ ${currency(preco, 2)}`,
        quantidade: `${quantidade} BTC`,
        total: `R$ ${currency(valorCompra, 2)}`
      }
      return [obj, ...state]
    }
    case 'REMOVE_USER_AUTH': {
      return action.payload
    }
    default: {
      return state
    }
  }
}

export default transactions
