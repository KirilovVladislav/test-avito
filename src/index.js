import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// HashRouter для gh pages
import { HashRouter, BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import './index.scss'
import App from './App'
import store from './store'


ReactDOM.render(
  // <BrowserRouter>
  <HashRouter basename={`/`}>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root')
);
