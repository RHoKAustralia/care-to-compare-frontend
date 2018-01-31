import React, { Component } from 'react'
import { withRouter } from 'react-router'

import Container from 'components/Container'

class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          height: '100px',
          backgroundColor: '#3f3d3d',
          marginTop: '40px',
          color: 'white',
        }}
      >
        <Container>TODO: footer..</Container>
      </footer>
    )
  }
}

export default withRouter(Footer)
