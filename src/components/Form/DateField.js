import React from 'react'

const DateField = ({ input, meta, ...props }) => {
  return <input type="date" onChange={input.onChange} />
}

export default DateField
