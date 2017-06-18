import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Header from '../Header'
import Landing from '../../pages/Landing';
import Search from '../../pages/Search';
import SearchResults from '../../pages/SearchResults';
import Checkout from '../../pages/Checkout';
import Thanks from '../../pages/Thanks';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/search' component={Search} />
            <Route path='/results' component={SearchResults} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/thanks' component={Thanks} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
