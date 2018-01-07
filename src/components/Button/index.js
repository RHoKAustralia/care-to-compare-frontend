import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.css'

const Button = (props) => (
  <button
    className={classnames(styles.btn, {
      [styles.primary]: props.primary,
      [styles.ghost]: props.ghost,
      [styles.secondary]: props.secondary,
    })}
    onClick={props.onClick}
  >
    {props.children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  ghost: PropTypes.bool,
  secondary: PropTypes.bool,
}

Button.defaultProps = {
  children: [],
  onClick: () => {},
  primary: false,
  ghost: false,
  secondary: false,
}

export default Button
