import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import { Provider } from 'react-redux'

import { Adapter, store } from './utils'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Adapter>
    <Provider store={store}>
      <App />
    </Provider>
  </Adapter>
)
