import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Combination from './Combination.js';
import NewsApp from './NewsApp.js';
import Footer from './Footer.js';
import IndiaData from './IndiaData.js';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Combination />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
