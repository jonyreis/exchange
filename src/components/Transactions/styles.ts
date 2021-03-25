import styled from 'styled-components'

export const TransactionsContainer = styled.section`
  background-color: #fff;
  border-radius: 16px;
  width: 770px;
  margin: 32px 8px 0;

  -webkit-box-shadow: 4px 4px 8px 0px rgba(221, 221, 221, 1);
  -moz-box-shadow: 4px 4px 8px 0px rgba(221, 221, 221, 1);
  box-shadow: 4px 4px 8px 0px rgba(221, 221, 221, 1);
  @media (max-width: 1200px) {
    max-width: 100%;
  }
  @media (max-width: 960px) {
    margin: 32px 0 0;
    width: 100%;
  }
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
