import React, { Component } from 'react'
import classnames from 'classnames'

import styles from './styles.css'

const BoxOption = ({ option, selected, onSelect }) => {
  return (
    <div className={styles.itemContainer}>
      <div
        className={classnames(styles.itemWrapper, {
          [styles.itemSelected]: selected,
          [styles.itemUnselected]: !selected,
        })}
        onClick={() => onSelect(option)}
      >
        <div className={styles.itemWrapperInner}>
          {option.icon && (
            <div className={styles.itemIcon}>
              {selected ? (
                <img
                  src={option.icon.selected}
                  alt={option.text + ' selected'}
                />
              ) : (
                <img
                  src={option.icon.unSelected}
                  alt={option.text + ' not selected'}
                />
              )}
            </div>
          )}
          <div
            style={{ ...option.style }}
            className={classnames(styles.itemText, {
              [styles.itemTextWithIcon]: option.icon,
              [styles.itemTextNoIcon]: !option.icon,
            })}
          >
            {option.text}
          </div>
        </div>
      </div>
    </div>
  )
}

class BoxSelectGroup extends Component {
  constructor(props) {
    super(props)

    const { selectedOption } = props

    this.state = {
      selectedId: selectedOption ? selectedOption.id : null,
    }
  }

  select = (option) => {
    const idToSet = this.state.selectedId === option.id ? null : option.id
    this.setState({ selectedId: idToSet })
    this.props.onSelection(idToSet == null ? null : option)
  }

  render() {
    const { options } = this.props

    return (
      <div className={styles.groupContainer}>
        {options.map((value, index) => (
          <BoxOption
            key={value.id}
            option={value}
            onSelect={this.select}
            selected={this.state.selectedId === value.id}
          />
        ))}
      </div>
    )
  }
}

export default BoxSelectGroup
