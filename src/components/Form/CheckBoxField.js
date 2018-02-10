import React from 'react'
import { Checkbox } from 'react-bootstrap'

const CheckBoxField = ({ input, mets, label, ...props }) => {
  return (
    <Checkbox {...props} {...input}>
      {label}
    </Checkbox>
  )
}

export default CheckBoxField
