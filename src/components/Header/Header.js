import React, { Component } from 'react';
import { withRouter } from 'react-router'
import './styles.css';

// TODO: Use central route config
const routes = [
  '/',
  '/landing',
  '/search',
  '/results',
  '/checkout',
  '/thanks'
];

class Header extends Component {
  render() {
    const stepNumber = routes.indexOf(this.props.location.pathname);

    return (
      <div className="App-header">
        <h2>Care to Compare</h2>
        <div className='pagination'>
          {routes.map((route, i) =>
            <i className={`fa fa-circle${i > stepNumber ? '-o' : ''}`} />
          )}
        </div>
      </div>
    )
  }
}

export default withRouter(Header);
