import React from 'react'
import { useSelector, RootStateOrAny } from 'react-redux'

import { TransactionsContainer } from './styles'

const Transactions: React.FC = () => {
  const { transactions } = useSelector((state: RootStateOrAny) => state)
  console.log(transactions)
  return (
    <TransactionsContainer>
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
          {transactions.map(
            (item: {
              key: number,
              date: React.ReactNode,
              coin: any,
              preco: string,
              quantidade: any,
              total: any
            }) => (
              <tr key={item.key}>
                <td>{item.date}</td>
                <td>{item.coin}</td>
                <td>{item.preco}</td>
                <td>{item.quantidade}</td>
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
