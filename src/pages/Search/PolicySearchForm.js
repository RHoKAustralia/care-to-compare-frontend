import React from 'react'
import { Field, reduxForm } from 'redux-form'

let PolicySearchForm = props => {
  const { handleSubmit } = props
  
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="category">Who is covered:</label>
        <Field name="category" component="select" style={{display: 'block'}}>
            <option value="Dependants only">Dependants only</option>
            <option value="One adult">Single</option>
            <option value="One adult &amp; any dependants">Single and Dependants</option>
            <option value="One adult &amp; dependant(s)">Single any Dependants</option>
            <option value="Two adults">Couples</option>
            <option value="Two adults &amp; any dependants">Couples any Dependants</option>
            <option value="Two adults &amp; dependant(s)">Couples and Dependants</option>
          </Field>
      </div>
      <div>
        <label htmlFor="type">Type of cover:</label>
        <Field name="type" component="select" style={{display: 'block'}}>
            <option value="Combined">Combined</option>
            <option value="General">General</option>
            <option value="Hospital">Hospital</option>
        </Field>
      </div>
      <div>
        <label htmlFor="states">Excess:</label>
        <Field name="states" component="select" style={{display: 'block'}}>
            <option value="ACT">ACT</option>
            <option value="NSW">NSW</option>
            <option value="NT">Hospital</option>
            <option value="QLD">QLD</option>
            <option value="SA">Hospital</option>
            <option value="TAS">TAS</option>
            <option value="VIC">VIC</option>
            <option value="WA">WA</option>
        </Field>
      </div>
      <div>
        <label htmlFor="excess">Excess:</label>
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
