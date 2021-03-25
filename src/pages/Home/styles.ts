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
        color: #fff;
        padding: 4px;
        cursor: pointer;
      }
    }
  }
  main {
    max-width: 1200px;
    margin: -100px auto 0;
    .currency-container {
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
        }
      }
    }
    .container-transactions {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
`
