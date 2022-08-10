import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ReflistNav from "./ReflistNav";
import ReflistBody from "./ReflistBody";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReflistNav />
    <ReflistBody />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
