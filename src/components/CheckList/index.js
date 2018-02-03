import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import { IconTick, IconCross } from 'components/Icons'

import styles from './styles.css'

const CheckList = ({ items, itemSpacing }) => {
  return (
    <ul className="fa-ul">
      {items.map((item, index) => (
        <li
          key={index}
          className={classnames({
            [styles.medium]: itemSpacing === 'medium',
            [styles.large]: itemSpacing === 'large',
          })}
        >
          <span className="fa-li">
            {item.checked ? <IconTick /> : <IconCross />}
          </span>
          {item.label}
        </li>
      ))}
    </ul>
  )
}

CheckList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      checked: PropTypes.bool.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
  itemSpacing: PropTypes.oneOf(['normal', 'medium', 'large']),
}

CheckList.defaultProps = {
  itemSpacing: 'normal',
}

export default CheckList
