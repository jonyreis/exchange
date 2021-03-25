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
    margin: -100px auto 0;
    .buy-sell-transactions {
      display: grid;
      grid-template-columns: 1fr 4fr;
      gap: 90px;
    }
  }
`
