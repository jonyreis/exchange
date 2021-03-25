import styled from 'styled-components'

export const SignUpContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: 700;
    font-size: 40px;
  }
  button {
    background-color: #000;
    border: none;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.6px;
    width: 100%;
    height: 61px;
    margin-top: 8px;
    cursor: pointer;
  }
  form {
    margin-top: 16px;
  }
  .field {
    display: flex;
    flex-direction: column;
    margin: 16px 0;
    label {
      background-color: #fff;
      font-weight: 500;
      margin-left: 4px;
      margin-bottom: 4px;
    }
    span {
      font-size: 10px;
      font-weight: 300;
      color: red;
      text-align: right;
      margin-top: 8px;
      margin-right: 16px;
    }
  }
  .error {
    color: red;
    text-align: center;
    margin: 8px 0;
  }
  input {
    border: 1px solid #666;
    color: #000;
    font-size: 14px;
    line-height: 14px;
    text-align: center;

    width: 330px;
    height: 51px;
    transition: 200ms;
    &::placeholder {
      color: #666;
      font-family: Object Sans, sans-serif;
      font-size: 14px;
      line-height: 18px;
      text-align: center;
    }
    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px #000;
      &::placeholder {
        opacity: 0.5;
      }
    }
  }
  .voltar {
    display: flex;
    justify-content: center;
    margin-top: 32px;
    a {
      color: #000;
      font-weight: 600;
      text-decoration: none;

      margin-left: 8px;
    }
  }
`
