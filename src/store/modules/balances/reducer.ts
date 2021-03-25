import { Reducer } from 'redux'
import { IBalances } from './types'

const INITIAL_STATE: IBalances = {
  britas: 0,
  bitcoin: 0,
  real: 100000
}

const balances: Reducer<IBalances> = (state = INITIAL_STATE, action) => {
  console.log(action.type, action.payload)
  switch (action.type) {
    case 'BUY_BITCOIN_WITH_REAL': {
      const { preco, quantidade } = action.payload
      const valorCompra = preco * quantidade

      const newState = {
        britas: state.britas,
        bitcoin: state.bitcoin + quantidade,
        real: state.real - valorCompra
      }
      return newState
    }
    default: {
      return state
    }
  }
}

export default balances
