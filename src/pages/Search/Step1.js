import React from 'react'
import { connect } from 'react-redux'
import {
  Field,
  reduxForm,
  getFormSyncErrors,
  isValid,
  getFormMeta,
} from 'redux-form'

import {
  searchFormName,
  catergoryOptions,
  typeOptions,
  statesOptions,
} from './constants'

const validate = (values) => {
  const errors = {}

  if (!values.categoryOfCover) {
    errors.categoryOfCover = 'Required'
  }
  if (!values.policyType) {
    errors.policyType = 'Required'
  }
  if (!values.stateOfResidence) {
    errors.stateOfResidence = 'Required'
  }

  return errors
}

const Error = ({ fields, errors, fieldName }) => {
  if (fields && errors) {
    if (fields[fieldName] && fields[fieldName].touched && errors[fieldName]) {
      return <span style={{ color: 'red' }}>{errors[fieldName]}</span>
    }
  }

  return <span />
}

let Step1 = (props) => {
  const { handleSubmit, fieldErrors, valid, fields } = props

  return (
    <form onSubmit={handleSubmit}>
      <h2>Search Criteria (Step 1)</h2>

      <div>
        <label htmlFor="categoryOfCover">Who is covered:</label>
        <Field
          name="categoryOfCover"
          component="select"
          style={{ display: 'block' }}
        >
          <option />
          {catergoryOptions.map((o) => (
            <option key={`category_${o.value}`} value={o.value}>
              {o.label}
            </option>
          ))}
        </Field>
        <Error
          fields={fields}
          errors={fieldErrors}
          fieldName="categoryOfCover"
        />
      </div>
      <div>
        <label htmlFor="policyType">Type of cover:</label>
        <Field
          name="policyType"
          component="select"
          style={{ display: 'block' }}
        >
          <option />
          {typeOptions.map((o) => (
            <option key={`type_${o.value}`} value={o.value}>
              {o.label}
            </option>
          ))}
        </Field>
        <Error fields={fields} errors={fieldErrors} fieldName="policyType" />
      </div>
      <div>
        <label htmlFor="stateOfResidence">Location:</label>
        <Field
          name="stateOfResidence"
          component="select"
          style={{ display: 'block' }}
        >
          <option />
          {statesOptions.map((o) => (
            <option key={`state_${o.value}`} value={o.value}>
              {o.label}
            </option>
          ))}
        </Field>
        <Error
          fields={fields}
          errors={fieldErrors}
          fieldName="stateOfResidence"
        />
      </div>

      <button type="submit" disabled={!valid}>
        Next
      </button>
    </form>
  )
}

Step1 = reduxForm({
  form: searchFormName,
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Step1)

Step1 = connect((state) => ({
  fieldErrors: getFormSyncErrors(searchFormName)(state),
  valid: isValid(searchFormName)(state),
  fields: getFormMeta(searchFormName)(state),
}))(Step1)

export default Step1
