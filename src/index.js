import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'

import 'materialize-css/dist/css/materialize.min.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'font-awesome/css/font-awesome.min.css'
import './index.css'

const rootReducer = (state = {}, action) => { console.log(action); return state }

const configureStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore)

const store = configureStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
registerServiceWorker()
