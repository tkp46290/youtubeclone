import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider}  from 'react-redux';
import store from '../src/redux/store.js'
import { BrowserRouter } from 'react-router-dom';
import 'react-lazy-load-image-component/src/effects/blur.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <Provider store={store}>
      <BrowserRouter>
    <App />
    </BrowserRouter>
  </Provider>
  </React.StrictMode>,
)
