import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import { currency } from '../../utils/currency'

import { BalancesContainer } from './styles'

const Balances: React.FC = () => {
  const { balances } = useSelector((state: RootStateOrAny) => state)

  return (
    <BalancesContainer>
      <div className="currency">
        <h2>Bitcoin</h2>
        <h3>
          {currency(balances.bitcoin, 8)} <span>BTC</span>
        </h3>
      </div>
      <div className="currency">
        <h2>Britas</h2>
        <h3>
          {currency(balances.britas, 2)} <span>BRI</span>
        </h3>
      </div>
      <div className="currency">
        <h2>Real</h2>
        <h3>
          {currency(balances.real, 2)} <span>BRL</span>
        </h3>
      </div>
    </BalancesContainer>
  )
}

export default Balances
