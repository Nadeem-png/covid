import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import CovidApi from './components/CovidApi';

ReactDOM.render(
  <React.StrictMode>
    <CovidApi/>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
