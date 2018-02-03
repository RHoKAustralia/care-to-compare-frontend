import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.css'

const Button = ({ primary, ghost, secondary, size, block, ...props }) => (
  <button
    className={classnames(styles.btn, {
      [styles.primary]: primary,
      [styles.ghost]: ghost,
      [styles.secondary]: secondary,
      [styles.small]: size === 'small',
      [styles.large]: size === 'large',
      [styles.medium]: size === 'medium',
      [styles.xlarge]: size === 'xlarge',
      [styles.block]: block,
    })}
    {...props}
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
  size: PropTypes.oneOf(['default', 'small', 'medium', 'large', 'xlarge']),
  block: PropTypes.bool,
}

Button.defaultProps = {
  children: [],
  onClick: () => {},
  primary: false,
  ghost: false,
  secondary: false,
  size: 'default',
  block: false,
}

export default Button
