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
      const { price, amount } = action.payload
      const valorCompra = price * amount

      const newState = {
        britas: state.britas,
        bitcoin: state.bitcoin + amount,
        real: state.real - valorCompra
      }
      return newState
    }
    case 'BUY_BITCOIN_WITH_BRITAS': {
      const { price, amount } = action.payload
      const valorCompra = price * amount

      const newState = {
        britas: state.britas - valorCompra,
        bitcoin: state.bitcoin + amount,
        real: state.real
      }
      return newState
    }
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
