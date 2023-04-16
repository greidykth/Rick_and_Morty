import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
const base_url = process.env.REACT_APP_BASE_URL;
ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter basename={base_url} >
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
