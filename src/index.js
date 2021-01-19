import './css/bootstrap-css/bootstrap.min.css';
import './css/fonts.min.css';
import './css/normalize.min.css';
import './css/style.min.css';
import './css/responsive.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { LotrApiCall } from './LotrApiCall';

import reportWebVitals from './reportWebVitals';

//Lancement react quand #react-livres est présent
if(document.getElementById('reactRoot') !== null){
  const reactLivres = document.getElementById('reactRoot');
  ReactDOM.render(<LotrApiCall /> , reactLivres);    
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
