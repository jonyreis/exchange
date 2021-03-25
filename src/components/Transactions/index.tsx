import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import { TransactionsContainer } from './styles'

const Transactions: React.FC = () => {
  const { transactions } = useSelector((state: RootStateOrAny) => state)

  return (
    <TransactionsContainer className="animeTop">
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Criptomoeda</th>
            <th>Preço</th>
            <th>Quantidade</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr className="tr-less-660">
            <td>Data</td>
            <td>Criptomoeda</td>
            <td>Preço</td>
            <td>Quantidade</td>
            <td>Total</td>
          </tr>
          {transactions.map(
            (item: {
              key: number,
              date: string,
              coin: string,
              price: string,
              amount: string,
              total: string
            }) => (
              <tr key={item.key}>
                <td>{item.date}</td>
                <td>{item.coin}</td>
                <td>{item.price}</td>
                <td>{item.amount}</td>
                <td>{item.total}</td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </TransactionsContainer>
  )
}

export default Transactions
