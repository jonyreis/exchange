import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  header {
    background-color: #000;
    color: #fff;

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
    margin: 40px auto;
    .currency {
      -webkit-box-shadow: 4px 4px 8px 0px rgba(221,221,221,1);
      -moz-box-shadow: 4px 4px 8px 0px rgba(221,221,221,1);
      box-shadow: 4px 4px 8px 0px rgba(221,221,221,1);

      width: 240px;
      margin: 16px 0;
      padding: 16px 32px;
      h3 {
        font-size: 16px;
        margin-top: 4px;
      }
    }
  }
`
