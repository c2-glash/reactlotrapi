import React from 'react';
import ReactDOM from 'react-dom';

import './css/bootstrap-css/bootstrap-grid.min.css';
import './css/fonts.min.css';
import './css/normalize.min.css';
import './css/style.min.css';
import './css/responsive.min.css';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('reactRoot')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
