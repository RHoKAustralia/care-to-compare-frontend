import React, { Component } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Header, Footer } from '../index'
import {
  Landing,
  Search,
  SearchResults,
  Checkout,
  Thanks,
} from '../../pages'
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
