import React from 'react'
import { currency } from '../../utils/currency'

interface IPriceProps {
  buyCriptoSelected: string;
  withCriptoSelected: string;
  bitcoin: number;
  britas: number;
  inputAmount: number;
}

const Price: React.FC<IPriceProps> = ({
  buyCriptoSelected,
  withCriptoSelected,
  bitcoin,
  britas,
  inputAmount
}) => (
  <>
    <div className="field">
      <label htmlFor="total">Total:</label>
      {buyCriptoSelected === 'selecione' &&
        withCriptoSelected === 'selecione' && <input />}

      {buyCriptoSelected === 'selecione' &&
        withCriptoSelected !== 'selecione' && <input />}

      {withCriptoSelected === 'selecione' &&
        buyCriptoSelected !== 'selecione' && <input />}

      {buyCriptoSelected === 'bitcoin' && withCriptoSelected === 'real' && (
        <input value={inputAmount && currency(bitcoin * inputAmount, 2)} />
      )}

      {buyCriptoSelected === 'bitcoin' && withCriptoSelected === 'britas' && (
        <input
          value={inputAmount && currency((bitcoin / britas) * inputAmount, 2)}
        />
      )}

      {buyCriptoSelected === 'britas' && withCriptoSelected === 'real' && (
        <input value={inputAmount && currency(britas * inputAmount, 2)} />
      )}

      {buyCriptoSelected === 'britas' && withCriptoSelected === 'bitcoin' && (
        <input
          value={inputAmount && currency((britas / bitcoin) * inputAmount, 8)}
        />
      )}

      {buyCriptoSelected === 'real' && withCriptoSelected === 'bitcoin' && (
        <input value={inputAmount && currency(inputAmount / bitcoin, 8)} />
      )}

      {buyCriptoSelected === 'real' && withCriptoSelected === 'britas' && (
        <input value={inputAmount && currency(inputAmount / britas, 2)} />
      )}
    </div>
  </>
)

export default Price
