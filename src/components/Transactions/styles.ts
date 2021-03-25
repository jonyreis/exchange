import styled from 'styled-components'

export const TransactionsContainer = styled.section`
  background-color: #fff;
  border-radius: 16px;
  width: 770px;
  margin-top: 20px;
  table {
    width: 100%;
    thead tr,
    tbody tr {
      display: grid;
      grid-template-columns: 2fr 3fr 3fr 3fr 3fr;
      font-size: 14px;
    }
    thead tr {
      margin: 8px 0;
      padding: 8px 0;
    }
    tbody tr {
      margin: 8px 0;
      td {
        text-align: center;
      }
    }
    thead {
      padding: 4px 0;
    }
  }
`
