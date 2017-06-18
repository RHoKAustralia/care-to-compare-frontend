import React, { Component } from 'react';
import { withRouter } from 'react-router'
import './styles.css';
import logo from '../../assets/C2Clogo.png';

// TODO: Use central route config
const routes = [
  '/',
  '/search',
  '/results',
  '/checkout',
  '/thanks'
];

class Header extends Component {
  render() {
    const stepNumber = routes.indexOf(this.props.location.pathname);

    return (
      <header>
        <img src={logo} alt='Care to Compare logo' />
        <div className='pagination'>
          <div className='pagination-bar'>
            {routes.map((route, i) =>
              <i className={`fa fa-circle${i > stepNumber ? '-o' : ''}`} />
            )}
          </div>
        </div>
      </header>
    )
  }
}

export default withRouter(Header);
