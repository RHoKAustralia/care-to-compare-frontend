import React, { Component } from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Header from 'components/Header'
//import Footer from '../components/Footer'
import Landing from 'pages/Landing'
import SearchForm from 'pages/SearchForm'
import SearchResults from 'pages/SearchResults'
import Checkout from 'pages/Checkout'
import Thanks from 'pages/Thanks'
import './styles.css'

const Footer = (props) => <noscript />

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/search" component={SearchForm} />
            <Route path="/results" component={SearchResults} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/thanks" component={Thanks} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App
