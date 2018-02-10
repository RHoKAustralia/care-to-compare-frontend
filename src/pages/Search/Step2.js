import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { ControlLabel, HelpBlock, Row, Col } from 'react-bootstrap'

import {
  searchFormName,
  extrasInclusionsOptions,
  hospitalInclusionsOptions,
} from './constants'
import styles from './styles.css'

import { DateField, SelectField } from 'components/Form'
import Button from 'components/Button'
import Card, { Content } from 'components/Card'

import FieldGroup from './FieldGroup'
import InclusionSelectionGroup from './InclusionSelectionGroup'

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
    <div>
      <Card>
        <Content>
          <Row>
            <Col sm={5}>
              {(policyType === 'HOSPITAL' || policyType === 'COMBINED') && (
                <FieldGroup
                  controlId="levelOfHospitalCover"
                  label={
                    <ControlLabel className="h3">
                      What level of hospital cover would you like?
                    </ControlLabel>
                  }
                  field={
                    <Field name="levelOfHospitalCover" component={SelectField}>
                      <option />
                      <option value="1">Basic</option>
                      <option value="2">Bronze</option>
                      <option value="3">Silver</option>
                      <option value="4">Gold</option>
                      <option value="5">Top</option>
                    </Field>
                  }
                  helpBlock={
                    <HelpBlock>
                      (Optional: this helps us detemine policy inclusions...)
                    </HelpBlock>
                  }
                />
              )}

              {(policyType === 'EXTRAS' || policyType === 'COMBINED') && (
                <FieldGroup
                  controlId="levelOfExtrasCover"
                  label={
                    <ControlLabel className="h3">
                      What level of extras cover would you like?
                    </ControlLabel>
                  }
                  field={
                    <Field name="levelOfExtrasCover" component={SelectField}>
                      <option />
                      <option value="1">Basic</option>
                      <option value="2">Bronze</option>
                      <option value="3">Silver</option>
                      <option value="4">Gold</option>
                      <option value="5">Top</option>
                    </Field>
                  }
                  helpBlock={
                    <HelpBlock>
                      (Optional: this helps us detemine policy inclusions...)
                    </HelpBlock>
                  }
                />
              )}

              <FieldGroup
                controlId="dateOfBirth"
                label={
                  <ControlLabel className="h3">
                    What is your date of birth?
                  </ControlLabel>
                }
                field={
                  <Field
                    name="dateOfBirth"
                    component={DateField}
                    dateFormat="DD/MM/YYYY"
                    showClearButton={false}
                  />
                }
                helpBlock={
                  <HelpBlock>
                    (Optional: this helps us detemine your loading...)
                  </HelpBlock>
                }
              />

              <FieldGroup
                controlId="heldPreviousInsurance"
                label={
                  <ControlLabel className="h3">
                    Have you held previous insurnace?
                  </ControlLabel>
                }
                field={
                  <Field
                    name="heldPreviousInsurance"
                    component={SelectField}
                    onChange={(event, newValue, previousValue) => {
                      if (newValue === 'false') {
                        change('dateSinceInsured', null)
                      }
                    }}
                  >
                    <option />
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                  </Field>
                }
                helpBlock={
                  <HelpBlock>(Optional: this helps us detemine...)</HelpBlock>
                }
              />

              {heldPreviousInsurance === 'true' && (
                <FieldGroup
                  controlId="dateSinceInsured"
                  label={
                    <ControlLabel className="h3">
                      What is the first date your were insurence from?
                    </ControlLabel>
                  }
                  field={
                    <Field
                      name="dateSinceInsured"
                      component={DateField}
                      dateFormat="DD/MM/YYYY"
                      showClearButton={false}
                    />
                  }
                  helpBlock={
                    <HelpBlock>
                      (Optional: this helps us detemine your loading...)
                    </HelpBlock>
                  }
                />
              )}

              <FieldGroup
                controlId="rebateTier"
                label={
                  <ControlLabel className="h3">
                    What is your annual income?
                  </ControlLabel>
                }
                field={
                  <Field name="rebateTier" component={SelectField}>
                    <option />
                    <option value="1">Below $90,000</option>
                    <option value="2">$90,001 - $105,000</option>
                    <option value="3">$105,001 - $140,000</option>
                    <option value="4">Over $140,000+</option>
                  </Field>
                }
                helpBlock={
                  <HelpBlock>
                    (Optional: this helps us detemine your rebate...)
                  </HelpBlock>
                }
              />
            </Col>
            <Col sm={6} smOffset={1}>
              <Row>
                {(policyType === 'HOSPITAL' || policyType === 'COMBINED') && (
                  <Col sm={policyType === 'HOSPITAL' ? 12 : 6}>
                    <InclusionSelectionGroup
                      title="What hospital?"
                      name="hospitalInclusions"
                      options={hospitalInclusionsOptions}
                      currentSelection={hospitalInclusions}
                    />
                  </Col>
                )}
                {(policyType === 'EXTRAS' || policyType === 'COMBINED') && (
                  <Col sm={policyType === 'EXTRAS' ? 12 : 6}>
                    <InclusionSelectionGroup
                      title="What extras?"
                      name="extrasInclusions"
                      options={extrasInclusionsOptions}
                      currentSelection={extrasInclusions}
                    />
                  </Col>
                )}
              </Row>
              <Row>
                <Col xs={12}>
                  <HelpBlock>
                    (Optional: this helps us narrow down the policies that is
                    best fit for you)
                  </HelpBlock>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
      </Card>
      <div className={styles.buttonContainer}>
        <Button
          ghost
          onClick={onPrevious}
          size="xlarge"
          type="button"
          style={{ marginRight: '15px' }}
        >
          Back
        </Button>
        <Button primary onClick={handleSubmit} type="button" size="xlarge">
          Let's Compare
        </Button>
      </div>
    </div>
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
