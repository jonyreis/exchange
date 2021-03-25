import styled from 'styled-components'

export const BalancesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
  }
  .currency {
    background-color: #fff;
    -webkit-box-shadow: 4px 4px 8px 0px rgba(221, 221, 221, 1);
    -moz-box-shadow: 4px 4px 8px 0px rgba(221, 221, 221, 1);
    box-shadow: 4px 4px 8px 0px rgba(221, 221, 221, 1);
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;

    width: 340px;
    height: 120px;
    margin: 0 8px;
    padding: 16px 32px;
    @media (max-width: 960px) {
      margin: 0;
      height: 110px;
    }
    @media (max-width: 700px) {
      width: 300px;
    }
    @media (max-width: 660px) {
      margin: 8px 0;
    }
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
