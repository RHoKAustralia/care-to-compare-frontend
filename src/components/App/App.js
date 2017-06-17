import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Referral from '../../pages/Referral';
import Landing from '../../pages/Landing';
import Search from '../../pages/Search';
import SearchResults from '../../pages/SearchResults';
import Checkout from '../../pages/Checkout';
import Thanks from '../../pages/Thanks';

import logo from '../../assets/logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Router>
          <Switch>
            <Route exact path='/' component={Referral} />
            <Route path='/landing' component={Landing} />
            <Route path='/search' component={Search} />
            <Route path='/results' component={SearchResults} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/thanks' component={Thanks} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
