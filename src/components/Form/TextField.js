import React from 'react'
import { FormControl } from 'react-bootstrap'

const TextField = ({ input, meta, ...props }) => {
  return <FormControl {...props} {...input} />
}

export default TextField
