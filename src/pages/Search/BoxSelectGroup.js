import React, { Component } from 'react'

import styles from './styles.css'

const BoxOption = ({ option, selected, onSelect }) => {
  return (
    <div
      className={
        option.icon ? styles.itemContainer : styles.itemContainerNoIcon
      }
    >
      <div
        className={[
          styles.itemWrapper,
          selected ? styles.itemSelected : styles.itemUnselected,
        ].join(' ')}
        onClick={() => onSelect(option)}
      >
        <div className={styles.itemWrapperInner}>
          {option.icon ? (
            <div className={styles.itemIcon}>
              <i className={`fas ${option.icon} fa-3x`} />
            </div>
          ) : (
            <span />
          )}
          <div className={styles.itemText}>{option.text}</div>
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
