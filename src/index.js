import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'; 

ReactDOM.render(
  <React.StrictMode>
    <App darkmode={true}/>
  </React.StrictMode>,
  document.getElementById('root')
);