import React from 'react'
import { connect } from 'react-redux'
import {
  Field,
  reduxForm,
  getFormSyncErrors,
  isValid,
  getFormMeta,
  formValueSelector,
} from 'redux-form'
import { Button } from 'react-bootstrap'

import { BoxSelectGroupField } from 'components/Form'
import { searchFormName } from './constants'
import styles from './styles.css'

const categoryOfCoverOptions = [
  {
    id: 1,
    text: 'Individuals',
    icon: 'fa-user',
    value: 'SINGLES',
  },
  {
    id: 2,
    text: 'Couples',
    icon: 'fa-user-secret',
    value: 'COUPLES',
  },
  {
    id: 3,
    text: 'Families',
    icon: 'fa-users',
    value: 'FAMILIES',
  },
  // , {
  //     id: 4,
  //     text: 'Single Parents',
  //     icon: 'fa-child',
  //     value: ''
  // }
]

const policyTypeOptions = [
  {
    id: 1,
    text: 'Hospital',
    icon: 'fa-hospital',
    value: 'HOSPITAL',
  },
  {
    id: 2,
    text: 'Extras',
    icon: 'fa-camera-retro',
    value: 'EXTRAS',
  },
  {
    id: 3,
    text: 'Combined',
    icon: 'fa-volleyball-ball',
    value: 'COMBINED',
  },
]

const statesOptions = [
  { id: 1, value: 'ACT', text: 'ACT' },
  { id: 2, value: 'NSW', text: 'NSW' },
  { id: 3, value: 'NT', text: 'NT' },
  { id: 4, value: 'QLD', text: 'QLD' },
  { id: 5, value: 'SA', text: 'SA' },
  { id: 6, value: 'TAS', text: 'TAS' },
  { id: 7, value: 'WA', text: 'WA' },
  { id: 8, value: 'VIC', text: 'VIC' },
]

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

// const Error = ({ fields, errors, fieldName }) => {
//   if (fields && errors) {
//     if (fields[fieldName] && fields[fieldName].touched && errors[fieldName]) {
//       return <span style={{ color: 'red' }}>{errors[fieldName]}</span>
//     }
//   }

//   return <span />
// }

let Step1 = (props) => {
  const {
    handleSubmit,
    // fieldErrors,
    valid,
    // fields,
    categoryOfCover,
    policyType,
    stateOfResidence,
  } = props

  return (
    <form onSubmit={handleSubmit}>
      <div className="h4">Who need covers?</div>

      <div className={styles.searchFieldRow}>
        <Field
          name="categoryOfCover"
          component={BoxSelectGroupField}
          options={categoryOfCoverOptions}
          currentValue={categoryOfCover}
        />
      </div>

      <div className="h4">What type of cover are you looking for?</div>

      <div className={styles.searchFieldRow}>
        <Field
          name="policyType"
          component={BoxSelectGroupField}
          options={policyTypeOptions}
          currentValue={policyType}
        />
      </div>

      <div className="h4">Where do you live?</div>

      <div className={styles.searchFieldRow}>
        <Field
          name="stateOfResidence"
          component={BoxSelectGroupField}
          options={statesOptions}
          currentValue={stateOfResidence}
        />
      </div>

      <div className="pull-right">
        <Button
          bsStyle="primary"
          bsSize="large"
          type="submit"
          disabled={!valid}
        >
          Next&nbsp;<i className="fas fa-arrow-right" />
        </Button>
      </div>
    </form>
  )
}

Step1 = reduxForm({
  form: searchFormName,
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Step1)

const selector = formValueSelector(searchFormName)

Step1 = connect((state) => ({
  fieldErrors: getFormSyncErrors(searchFormName)(state),
  valid: isValid(searchFormName)(state),
  fields: getFormMeta(searchFormName)(state),
  categoryOfCover: selector(state, 'categoryOfCover'),
  policyType: selector(state, 'policyType'),
  stateOfResidence: selector(state, 'stateOfResidence'),
}))(Step1)

export default Step1
