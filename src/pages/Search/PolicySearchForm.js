import React from 'react'
import { Field, reduxForm } from 'redux-form'

let PolicySearchForm = props => {
  const { handleSubmit } = props
  
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
    </form>
  )
}

PolicySearchForm = reduxForm({
  // a unique name for the form
  form: 'search'
})(PolicySearchForm)

export default PolicySearchForm;
