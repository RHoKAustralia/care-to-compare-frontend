import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Header from 'components/Header'
import Footer from 'components/Footer'
import Search from 'pages/Search'
import SearchResults from 'pages/SearchResults'
import Checkout from 'pages/Checkout'
import Thanks from 'pages/Thanks'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route path="/results" component={SearchResults} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/thanks" component={Thanks} />
            <Route component={Search} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
