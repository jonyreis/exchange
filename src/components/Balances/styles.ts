import styled from 'styled-components'

export const BalancesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  .currency {
    background-color: #fff;
    /* -webkit-box-shadow: 4px 4px 8px 0px rgba(221, 221, 221, 1);
        -moz-box-shadow: 4px 4px 8px 0px rgba(221, 221, 221, 1);
        box-shadow: 4px 4px 8px 0px rgba(221, 221, 221, 1); */
    border-radius: 16px;
    width: 340px;
    height: 140px;
    padding: 16px 32px;
    h2 {
      font-size: 16px;
    }
    h3 {
      font-size: 32px;
      margin-top: 4px;
      span {
        font-size: 14px;
      }
    }
  }
`
