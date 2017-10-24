import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Header, Footer } from '../index'
import Landing from '../../pages/Landing'
import Search from '../../pages/Search'
import SearchResults from '../../pages/SearchResults'
import Checkout from '../../pages/Checkout'
import Thanks from '../../pages/Thanks'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/search' component={Search} />
            <Route path='/results' component={SearchResults} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/thanks' component={Thanks} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
