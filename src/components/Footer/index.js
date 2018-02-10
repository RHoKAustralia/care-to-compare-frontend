import React, { Component } from 'react'
import { withRouter } from 'react-router'

import Container from 'components/Container'
import styles from './styles.css'

class Footer extends Component {
  render() {
    return (
      <footer className={styles.footer}>
        <Container />
      </footer>
    )
  }
}

export default withRouter(Footer)
