import React from 'react'
import PropTypes from 'prop-types'

import './styles.css'

const Button = props => (
  <button
    className={`btn ${props.type ? 'btn-' + props.type : ''}`}
    onClick={props.onClick}
  >
    {props.children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  children: [],
  onClick: () => {},
}

export default Button
