import React from 'react'
import lodash from 'lodash'
import { Checkbox, FormGroup } from 'react-bootstrap'

const CheckboxGroupField = ({
  input: { value, onChange },
  groupId,
  groupOptions,
  currentSelection,
}) => {
  const inputs = []
  groupOptions.forEach((option, index) => {
    inputs.push(
      <Checkbox
        key={`${groupId}_${option.value}`}
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
      >
        {option.label}
      </Checkbox>,
    )
  })

  return <FormGroup bsSize="large">{inputs}</FormGroup>
}

export default CheckboxGroupField
