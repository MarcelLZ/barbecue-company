import React from 'react'
import ReactDOM from 'react-dom'
import ReduxThunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { AppContainer } from 'react-hot-loader'

import 'react-mdl/extra/material.css'
import 'react-mdl/extra/material.js'

import reducers from 'redux-flow'
import Root from './app'

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore)
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const render = App => ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers, devTools)}>
    <AppContainer>
      <App />
    </AppContainer>
  </Provider>,
  document.querySelector('[data-js="root"]')
)

render(Root)

module.hot && module.hot.accept('./app', () => {
  const App = require('./app').default
  render(App)
})
