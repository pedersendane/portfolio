import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import './Styles/index.css'
import App from './App';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
)

