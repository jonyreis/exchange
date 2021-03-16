import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useDispatch, useSelector } from 'react-redux'
import { signIn, signUp } from './store/Auth.store'

import { RootState } from './store'

function App() {
  const dispatch = useDispatch()

  const counter = useSelector((state: RootState) => state.auth)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={() => dispatch(signIn())}>Sum 1</button>
        <button onClick={() => dispatch(signUp())}>Subtract 1</button>
        <h1>{counter.counter}</h1>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default App;
