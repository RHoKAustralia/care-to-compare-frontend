import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import logo from 'assets/C2Clogo.png'
import Container from 'components/Container'

class Header extends Component {
  render() {
    return (
      <header>
        <Container>
          <Link to="/">
            <img src={logo} alt="Care to Compare logo" />
          </Link>
        </Container>
      </header>
    )
  }
}

export default withRouter(Header)
