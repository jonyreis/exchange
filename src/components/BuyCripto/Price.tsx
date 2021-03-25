import React from 'react'
import { currency } from '../../utils/currency'

interface IPriceProps {
  buyCriptoSelected: string;
  withCriptoSelected: string;
  bitcoin: number;
  britas: number;
}

const Price: React.FC<IPriceProps> = ({
  buyCriptoSelected,
  withCriptoSelected,
  bitcoin,
  britas
}) => (
  <>
    <div className="field">
      <label htmlFor="preco">Preço:</label>
      {buyCriptoSelected === 'selecione' &&
        withCriptoSelected === 'selecione' && <input />}

      {buyCriptoSelected === 'selecione' &&
        withCriptoSelected !== 'selecione' && <input />}

      {withCriptoSelected === 'selecione' &&
        buyCriptoSelected !== 'selecione' && <input />}

      {buyCriptoSelected === 'bitcoin' && withCriptoSelected === 'real' && (
        <input value={currency(bitcoin, 2)} />
      )}

      {buyCriptoSelected === 'bitcoin' && withCriptoSelected === 'britas' && (
        <input value={currency(bitcoin / britas, 2)} />
      )}

      {buyCriptoSelected === 'britas' && withCriptoSelected === 'real' && (
        <input value={currency(britas, 2)} />
      )}

      {buyCriptoSelected === 'britas' && withCriptoSelected === 'bitcoin' && (
        <input value={currency(britas / bitcoin, 8)} />
      )}

      {buyCriptoSelected === 'real' && withCriptoSelected === 'bitcoin' && (
        <input value={currency(1 / bitcoin, 8)} />
      )}

      {buyCriptoSelected === 'real' && withCriptoSelected === 'britas' && (
        <input value={currency(1 / britas, 2)} />
      )}
    </div>
  </>
)

export default Price
