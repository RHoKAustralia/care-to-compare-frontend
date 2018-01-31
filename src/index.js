import React from 'react'
import ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

// TODO: boostrap impor does not seem to be working, no classes imported...including in index.html for now
// import 'bootstrap/dist/css/bootstrap.css'
// import 'font-awesome/css/font-awesome.css'
import './index.css'

import rootReducer from 'reducers'
import rootSaga from 'sagas'

const API_ENDPOINT = process.env.API_ENDPOINT || 'http://localhost:4000/graphql'
const httpLink = new HttpLink({
  uri: API_ENDPOINT,
})

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
})

const sagaMiddleware = createSagaMiddleware()

const configureStore = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : (f) => f,
)(createStore)

const store = configureStore(rootReducer)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    <Provider store={store}>
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root'),
)
registerServiceWorker()
