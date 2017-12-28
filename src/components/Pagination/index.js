import React from 'react'
import PropTypes from 'prop-types'

import Container from 'components/Container'
import { IconCircle } from 'components/Icons'
import './styles.css'

const Pagination = ({ routes, currentStep }) => (
  <div className="pagination">
    <Container>
      <div className="pagination-bar">
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
