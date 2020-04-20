import React from 'react'
import ReactDOM from 'react-dom'
import './fonts/fonts.css'
import './index.css'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import App from './App'

const history = createBrowserHistory()

ReactDOM.render(
  <I18nextProvider i18n={i18n}>
    <Router history={history}>
      <App />
    </Router>
  </I18nextProvider>,
  document.getElementById('root'),
)
