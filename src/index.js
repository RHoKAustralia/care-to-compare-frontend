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

import { types, creators } from 'actions'

const rootReducer = (state = {}, action) => {
  switch(action.type) {
    case types.EXAMPLES.EXAMPLE_ACTION:
      return {
        ...state,
        example: action.payload.message,
      }
    default:
      return state
  }
}

const configureStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f,
)(createStore)

const store = configureStore(rootReducer)

store.dispatch(creators.example())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))
registerServiceWorker()
