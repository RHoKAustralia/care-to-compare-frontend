import React from 'react'
import DatePicker from 'react-bootstrap-date-picker'

const DateField = ({ input, meta, ...props }) => {
  return <DatePicker {...props} {...input} />
}

export default DateField
