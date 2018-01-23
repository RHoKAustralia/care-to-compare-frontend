import React from 'react'
// import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { signupFormName, statesOptions } from './constants'

let Step4 = (props) => {
  const { handleSubmit, onPrevious } = props

  return (
    <form onSubmit={handleSubmit}>
      <h2>Your Details (Step 4)</h2>

      <h3>Personal Details</h3>

      <div>
        <label htmlFor="firstName">First name:</label>
        <Field
          name="firstName"
          component="input"
          type="text"
          style={{ display: 'block' }}
        />
      </div>

      <div>
        <label htmlFor="lastName">Last name:</label>
        <Field
          name="lastName"
          component="input"
          type="text"
          style={{ display: 'block' }}
        />
      </div>

      <div>
        <label htmlFor="addressline1">Address 1:</label>
        <Field
          name="addressline1"
          component="input"
          type="text"
          style={{ display: 'block' }}
        />
      </div>

      <div>
        <label htmlFor="addressline2">Address 2:</label>
        <Field
          name="addressline2"
          component="input"
          type="text"
          style={{ display: 'block' }}
        />
      </div>

      <div>
        <label htmlFor="state">State:</label>
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
      </div>

      <div>
        <label htmlFor="postcode">Postcode:</label>
        <Field
          name="postcode"
          component="input"
          type="text"
          style={{ display: 'block' }}
        />
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <Field
          name="email"
          component="input"
          type="email"
          style={{ display: 'block' }}
        />
      </div>

      <div>
        <label htmlFor="contacNumber">Contact number:</label>
        <Field
          name="contacNumber"
          component="input"
          type="text"
          style={{ display: 'block' }}
        />
      </div>

      <h3>Payment Options</h3>

      <div>
        <label htmlFor="cardHolderName">Card holder name:</label>
        <Field
          name="cardHolderName"
          component="input"
          type="text"
          style={{ display: 'block' }}
        />
      </div>

      <button type="button" onClick={onPrevious}>
        Previous
      </button>
      <button type="submit">Buy Now</button>
    </form>
  )
}

Step4 = reduxForm({
  form: signupFormName,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Step4)

// Step4 = connect((state) => {
//   return state // TODO: get selected policy details
// })(Step4)

export default Step4
