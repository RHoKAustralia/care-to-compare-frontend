import React from 'react'

import BoxSelectGroup from './BoxSelectGroup'

const BoxSelectGroupField = ({
  input,
  input: { value, onChange },
  options,
  currentValue,
}) => {
  return (
    <BoxSelectGroup
      onSelection={(selectedOption) => {
        selectedOption ? onChange(selectedOption.value) : onChange(null)
      }}
      options={options}
      selectedOption={
        currentValue ? options.filter((o) => o.value === currentValue)[0] : null
      }
    />
  )
}

export default BoxSelectGroupField
