import React, { Component } from 'react';
import { withRouter } from 'react-router'

import Container from 'components/Container'
import Pagination from 'components/Pagination'
import './styles.css';
import logo from 'assets/C2Clogo.png';

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
        <Container>
          <img src={logo} alt='Care to Compare logo' />
          <Pagination
            routes={routes}
            currentStep={stepNumber}
          />
        </Container>
      </header>
    )
  }
}

export default withRouter(Header);
