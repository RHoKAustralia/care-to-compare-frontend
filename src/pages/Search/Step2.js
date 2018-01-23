import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'

import {
  searchFormName,
  extrasInclusionsOptions,
  hospitalInclusionsOptions,
} from './constants'
import CheckboxGroup from './CheckboxGroup'
//import { select } from 'async';

const InclusionsGroup = ({ title, name, options, currentSelection }) => (
  <div>
    <h4>{title}</h4>
    <div>
      <Field
        name={name}
        component={CheckboxGroup}
        groupId={name}
        groupOptions={options}
        currentSelection={currentSelection}
      />
    </div>
  </div>
)

let Step2 = (props) => {
  const {
    change,
    handleSubmit,
    onPrevious,
    policyType,
    heldPreviousInsurance,
    hospitalInclusions,
    extrasInclusions,
  } = props

  return (
    <form onSubmit={handleSubmit}>
      <h2>Refine Search (Step 2)</h2>

      <div>
        <label htmlFor="dateOfBirth">Date of birth:</label>
        <Field
          name="dateOfBirth"
          component="input"
          type="date"
          style={{ display: 'block' }}
        />
      </div>
      <div>
        <label htmlFor="heldPreviousInsurance">Held previous insurance:</label>
        <Field
          name="heldPreviousInsurance"
          component="select"
          style={{ display: 'block' }}
          onChange={(event, newValue, previousValue) => {
            console.log(newValue)
            if (newValue === 'false') {
              change('dateSinceInsured', null)
            }
          }}
        >
          <option />
          <option value="true">Yes</option>
          <option value="false">No</option>
        </Field>
      </div>

      {heldPreviousInsurance === 'true' && (
        <div>
          <label htmlFor="dateSinceInsured">Date insurance (TBA?):</label>
          <Field
            name="dateSinceInsured"
            component="input"
            type="date"
            style={{ display: 'block' }}
          />
        </div>
      )}

      <div>
        <label htmlFor="rebateTier">Rebate tier:</label>
        <Field
          name="rebateTier"
          component="select"
          style={{ display: 'block' }}
        >
          <option />
          <option value="1">$0 - $50,000</option>
          <option value="2">$50,000 - $100,000</option>
          <option value="3">$100,000 - $180,000</option>
          <option value="4">$180,000+</option>
        </Field>
      </div>

      {(policyType === 'HOSPITAL' || policyType === 'COMBINED') && (
        <InclusionsGroup
          title="Select Hospital Inclusions"
          name="hospitalInclusions"
          options={hospitalInclusionsOptions}
          currentSelection={hospitalInclusions}
        />
      )}

      {(policyType === 'EXTRAS' || policyType === 'COMBINED') && (
        <InclusionsGroup
          title="Select Extras Inclusions"
          name="extrasInclusions"
          options={extrasInclusionsOptions}
          currentSelection={extrasInclusions}
        />
      )}

      <button type="button" onClick={onPrevious}>
        Previous
      </button>
      <button type="submit">Search</button>
    </form>
  )
}

Step2 = reduxForm({
  form: searchFormName,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Step2)

const selector = formValueSelector(searchFormName)

Step2 = connect((state) => {
  const policyType = selector(state, 'policyType')
  const heldPreviousInsurance = selector(state, 'heldPreviousInsurance')
  const hospitalInclusions = selector(state, 'hospitalInclusions') || []
  const extrasInclusions = selector(state, 'extrasInclusions') || []

  return {
    policyType,
    heldPreviousInsurance,
    hospitalInclusions,
    extrasInclusions,
  }
})(Step2)

export default Step2
