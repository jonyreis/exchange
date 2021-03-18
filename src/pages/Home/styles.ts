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
`
