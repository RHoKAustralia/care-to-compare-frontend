import React from 'react'
import PropTypes from 'prop-types'

const IconCircle = ({ filled }) => (
  <i className={`fa fa-circle${filled ? '-o' : ''}`} />
)
IconCircle.propTypes = {
  filled: PropTypes.bool,
}

export default IconCircle
