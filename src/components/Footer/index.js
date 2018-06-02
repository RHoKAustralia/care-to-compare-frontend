import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'

import Container from 'components/Container'
import styles from './styles.css'

class Footer extends Component {
  render() {
    return (
      <footer className={styles.root}>
        <Container>
          <h2 className={styles.subheading}>Customer info</h2>
          <ul>
            <li>
              <Link to="/about">How Care to Compare works</Link>
            </li>
            <li>
              <a href="https://caretocompare.com.au/privacy-policy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://caretocompare.com.au/website-terms">
                Website Terms
              </a>
            </li>
            <li>
              <a href="https://caretocompare.com.au/faq">FAQ</a>
            </li>
          </ul>
        </Container>
      </footer>
    )
  }
}

export default withRouter(Footer)
