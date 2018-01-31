import React from 'react'
import { FormControl } from 'react-bootstrap'

const SelectField = ({ input, meta, ...props }) => {
  return (
    <FormControl {...props} {...input} componentClass="select">
      {props.children}
    </FormControl>
  )
}

export default SelectField
