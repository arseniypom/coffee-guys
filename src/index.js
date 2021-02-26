import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import "./scss/reset.css"
import './scss/style.scss';

import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//     <footer>
//         <p>made by @arseniypom, 2021</p>
//     </footer>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

