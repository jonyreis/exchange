import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #f5f5f5;
  width: 100%;
  height: 100vh;
  header {
    background-color: #f4c71e;
    color: #000;
    height: 180px;
    padding: 16px 0;
    .container {
      display: flex;
      justify-content: space-between;

      max-width: 95vw;
      margin: 0 auto;
      h1 {
        font-size: 24px;
      }
      button {
        background-color: transparent;
        border: none;
        color: #000;
        font-weight: 700;
        padding: 4px;
        cursor: pointer;
      }
    }
  }
  main {
    max-width: 1200px;
    margin: -80px auto 0;
    padding: 0 16px;
    @media (max-width: 700px) {
      padding: 0 8px;
    }
    .width-more-960 {
      @media (max-width: 960px) {
        display: none;
      }
    }
    .width-less-960 {
      width: 100%;
      @media (min-width: 961px) {
        display: none;
      }
      .balances-buycripto {
        display: flex;
        justify-content: space-between;
        padding: 0 8px;
        @media (max-width: 660px) {
          flex-direction: column;
          align-items: center;
        }
      }
    }
    .buy-sell-transactions {
      display: flex;
      justify-content: space-between;
      @media (max-width: 960px) {
        flex-direction: column;
      }
    }
  }
`
