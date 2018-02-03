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

import { BoxSelectGroupField } from 'components/Form'
import Card, { Content } from 'components/Card'
import Button from 'components/Button'

import { searchFormName } from './constants'
import styles from './styles.css'

const unSelectedIcon = require('../../assets/policy-options/combined-unselected.png')
const selectedIcon = require('../../assets/policy-options/combined selected.png')

const categoryOfCoverOptions = [
  {
    id: 1,
    text: 'Individual',
    icon: {
      unSelected: unSelectedIcon,
      selected: selectedIcon,
    },
    value: 'SINGLES',
  },
  {
    id: 2,
    text: 'Couple',
    icon: {
      unSelected: unSelectedIcon,
      selected: selectedIcon,
    },
    value: 'COUPLES',
  },
  {
    id: 3,
    text: 'Family',
    icon: {
      unSelected: unSelectedIcon,
      selected: selectedIcon,
    },
    value: 'FAMILIES',
  },
  // , {
  //     id: 4,
  //     text: 'Single Parents',
  //     icon: {
  //       unSelected: unSelectedIcon,
  //       selected: selectedIcon
  //     },
  //     value: ''
  // }
]

const policyTypeOptions = [
  {
    id: 1,
    text: 'Hospital',
    icon: {
      unSelected: unSelectedIcon,
      selected: selectedIcon,
    },
    value: 'HOSPITAL',
  },
  {
    id: 2,
    text: 'Extras',
    icon: {
      unSelected: unSelectedIcon,
      selected: selectedIcon,
    },
    value: 'EXTRAS',
  },
  {
    id: 3,
    text: 'Combined',
    icon: {
      unSelected: unSelectedIcon,
      selected: selectedIcon,
    },
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
    <div>
      <Card>
        <Content>
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
        </Content>
      </Card>
      <div className={styles.buttonContainer}>
        <Button
          primary
          onClick={handleSubmit}
          disabled={!valid}
          type="button"
          size="xlarge"
        >
          Continue
        </Button>
      </div>
    </div>
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
