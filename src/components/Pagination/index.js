import React from 'react'
import PropTypes from 'prop-types'

import Container from 'components/Container'
import { IconCircle } from 'components/Icons'
import styles from './styles.css'

const Pagination = ({ routes, currentStep }) => (
  <div className={styles.root}>
    <Container>
      <div className={styles.content}>
        {routes.map((route, index) => (
          <IconCircle key={index} filled={index > currentStep} />
        ))}
      </div>
    </Container>
  </div>
)

Pagination.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
}

export default Pagination
