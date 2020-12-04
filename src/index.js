import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// HashRouter для gh pages
// "homepage": "https://KirilovVladislav.github.io/test-avito",
import { HashRouter, BrowserRouter } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'

import './index.scss'
import App from './App'
import store from './store'


ReactDOM.render(
  <BrowserRouter>
    {/* <HashRouter basename={`https://KirilovVladislav.github.io/test-avito`}> */}
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
