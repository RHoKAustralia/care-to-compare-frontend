import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

const required = value => (value ? undefined : 'Required')

let PolicySearchForm = props => {
  const { handleSubmit, policyTypeValue } = props

  console.log(policyTypeValue)
  
  return (
    <form onSubmit={ handleSubmit }>
      <div>
        <label htmlFor="category">Who is covered:</label>
        <Field name="category" component="select" style={{display: 'block'}} validate={[required]}>
            <option />
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
        <Field name="type" component="select" style={{display: 'block'}} validate={[required]}>
            <option />
            <option value="Combined">Combined</option>
            <option value="General">General</option>
            <option value="Hospital">Hospital</option>
        </Field>
      </div>
      <div>
        <label htmlFor="states">Location:</label>
        <Field name="states" component="select" style={{display: 'block'}} validate={[required]}>
            <option />
            <option value="ACT">ACT</option>
            <option value="NSW">NSW</option>
            <option value="NT">NT</option>
            <option value="QLD">QLD</option>
            <option value="SA">SA</option>
            <option value="TAS">TAS</option>
            <option value="VIC">VIC</option>
            <option value="WA">WA</option>
        </Field>
      </div>

      {policyTypeValue === 'General' ? (
        <span />
      ) : (
        <div>
          <label htmlFor="excess">Excess:</label>
          <Field name="excess" component="input" type="text" />
        </div>
      )}
      
      <div>
        <label htmlFor="monthlyPremium">Max monthly premium:</label>
        <Field name="monthlyPremium" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

PolicySearchForm = reduxForm({
  form: 'policySearch'
})(PolicySearchForm)

// Decorate with connect to read form values
const selector = formValueSelector('policySearch') // <-- same as form name

PolicySearchForm = connect(state => {
  const policyTypeValue = selector(state, 'type')
  
  return {
    policyTypeValue
  }
})(PolicySearchForm)

export default PolicySearchForm;
