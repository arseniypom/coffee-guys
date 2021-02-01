import React from 'react';
import ReactDOM from 'react-dom';

import "./scss/reset.css"
import './scss/style.scss';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <footer>
        <p>made by @arseniypom, 2021</p>
    </footer>
  </React.StrictMode>,
  document.getElementById('root')
);

