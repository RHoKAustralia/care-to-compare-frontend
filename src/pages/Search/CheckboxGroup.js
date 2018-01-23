import React from 'react'
import lodash from 'lodash'

const CheckboxGroup = ({
  input: { value, onChange },
  groupId,
  groupOptions,
  currentSelection,
}) => {
  const inputs = []
  groupOptions.forEach((option, index) => {
    inputs.push(
      <label style={{ display: 'block' }} key={`${groupId}_${option.value}`}>
        <input
          type="checkbox"
          defaultChecked={lodash.includes(currentSelection, option.value)}
          value={option.value}
          onChange={(event) => {
            const updatedValue = value ? [...value] : []
            const isChecked = event.target.checked
            const selectedValue = event.target.value
            const selectedValuePosition = updatedValue.indexOf(selectedValue)

            // Is checked and value not present
            if (isChecked && selectedValuePosition < 0) {
              updatedValue.push(selectedValue)
            }

            // Is unchecked and value is present
            if (!isChecked && selectedValuePosition > -1) {
              updatedValue.splice(selectedValuePosition, 1)
            }

            onChange(updatedValue)
          }}
        />{' '}
        {option.label}
      </label>,
    )
  })

  return <div>{inputs}</div>
}

export default CheckboxGroup
