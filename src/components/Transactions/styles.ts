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
    border: none;
    display: block;

    min-width: 100%;
    thead tr,
    tbody tr {
      display: grid;
      grid-template-columns: 4fr 2fr 3fr 3fr 3fr;
      font-size: 14px;
      width: 770px;
      @media (max-width: 1180px) {
        width: 100%;
      }
    }
    thead tr {
      margin: 8px 0;
      padding: 8px 0;
      @media (max-width: 960px) {
        display: none;
      }
      th {
        text-align: center;
      }
    }
    tbody tr {
      padding: 10px 0;
      &:nth-child(even) {
        background-color: #fff;
      }
      &:nth-child(odd) {
        background-color: rgb(244, 199, 30, 0.2);
      }
      @media (max-width: 660px) {
        min-width: 660px;
      }
      td {
        text-align: center;
      }
    }
    .tr-less-660 {
      font-weight: 700;
      @media (min-width: 961px) {
        display: none;
      }
    }
    thead {
      padding: 4px 0;
    }
    tbody {
      display: block;
      max-height: 300px;

      overflow: auto;
    }
  }
`
