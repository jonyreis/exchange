import styled from 'styled-components'

export const BuySellContainer = styled.section`
  background-color: #fff;
  border-radius: 16px;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  width: 340px;
  height: 360px;
  margin-top: 32px;
  padding: 0 32px 32px;
  .field {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 8px 0;
    label {
      font-size: 16px;
      margin-right: 8px;
    }
    select,
    input {
      background: #fff;
      border: solid 1px #ddd;
      border-radius: 8px;
      font-weight: 700;
      font-size: 16px;
      text-align: center;

      display: flex;
      flex: 1;

      width: 100%;
      height: 40px;
      padding: 4px;
      transition: 0.2s;
      &::placeholder {
        font-size: 14px;
      }
      &:hover,
      &:focus {
        background-color: #fff;
        border: 1px solid #f4c71e;
        box-shadow: 0 0 0 1px #f4c71e;
        outline: none;
      }
      @media (max-width: 420px) {
        height: 32px;
        padding: 8px;
      }
    }
  }
  input {
    height: 40px;
  }
  .container-button {
    display: block;
    text-align: center;
    margin: 32px 0 0;
    button {
      border: none;
      border-radius: 8px;
      background-color: #f4c71e;
      color: #000;
      font-weight: 600;
      padding: 16px;
      width: 120px;
      margin: 0 8px;
      cursor: pointer;
      &:disabled {
        background-color: #eee;
      }
    }
  }
`
