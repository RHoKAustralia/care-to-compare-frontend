import React, { Component } from 'react'
import { withRouter } from 'react-router'

import logo from 'assets/C2Clogo.png'
import Container from 'components/Container'

class Header extends Component {
  render() {
    return (
      <header>
        <Container>
          <img src={logo} alt="Care to Compare logo" />
        </Container>
      </header>
    )
  }
}

export default withRouter(Header)
