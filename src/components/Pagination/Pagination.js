import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Pagination = ({ routes, currentStep}) => (
  <div className='pagination'>
    <div className='pagination-bar'>
      {routes.map((route, index) =>
        <i
          key={index}
          className={`fa fa-circle${index > currentStep ? '-o' : ''}`}
        />
      )}
    </div>
  </div>
)

Pagination.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string).isRequired,
  currentStep: PropTypes.number.isRequired,
}

export default Pagination
