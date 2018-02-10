import React from 'react'
import { Field } from 'redux-form'
import { ControlLabel, FormGroup } from 'react-bootstrap'

import { CheckboxGroupField } from 'components/Form'
import styles from './styles.css'

const InclusionSelectionGroup = ({
  title,
  name,
  options,
  currentSelection,
}) => (
  <div className={styles.inclusionGroup}>
    <FormGroup controlId={name}>
      <ControlLabel className="h3">{title}</ControlLabel>
      <Field
        name={name}
        component={CheckboxGroupField}
        groupId={name}
        groupOptions={options}
        currentSelection={currentSelection}
      />
    </FormGroup>
  </div>
)

export default InclusionSelectionGroup
