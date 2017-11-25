import React from 'react'
import { Field, reduxForm } from 'redux-form'

let PolicySearchForm = props => {
  const { handleSubmit } = props
  
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="whoIsCovered">Who is covered Name (Adult | Couples | Family)</label>
        <Field name="whoIsCovered" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="typeOfCover">Type of cover (Hospital | General | Combined)</label>
        <Field name="typeOfCover" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="excess">Excess ($$$):</label>
        <Field name="excess" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

PolicySearchForm = reduxForm({
  // a unique name for the form
  form: 'policySearch'
})(PolicySearchForm)

export default PolicySearchForm;
