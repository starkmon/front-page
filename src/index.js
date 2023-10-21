import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  InjectedConnector,
  StarknetConfig,
} from "@starknet-react/core";

const root = ReactDOM.createRoot(document.getElementById('root'));

const connectors = [
  new InjectedConnector({ options: { id: 'braavos' }}),
  new InjectedConnector({ options: { id: 'argentX' }}),
]

root.render(
  <React.StrictMode>
    <StarknetConfig connectors={connectors}>
      <App />
    </StarknetConfig>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
