import React from 'react';
import ReactDOM from 'react-dom/client'; //  React 18에서는 'react-dom/client'를 사용해야 함
import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

