import React from 'react';
import logo from './logo.svg';
import './App.css';
import {CounterProvider} from "./store";
import CounterView from "./components/counterview";
import CounterController from "./components/countercontroller";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CounterProvider>
          <CounterView />
          <CounterController />
        </CounterProvider>
      </header>
    </div>
  );
}

export default App;
