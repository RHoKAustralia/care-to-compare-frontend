import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, getFormValues } from 'redux-form'
import {
  Row,
  Col,
  FormGroup,
  ButtonToolbar,
  ToggleButtonGroup,
  ToggleButton,
} from 'react-bootstrap'

import { DateField, SelectField, TextField } from 'components/Form'
import Card, { Header, Content } from 'components/Card'
import Button from 'components/Button'

import SearchSummary from './SearchSummary'
import PurchaseSummary from './PurchaseSummary'

import { searchFormName, signupFormName } from './constants'

import styles from './styles.css'

const validate = (values) => {
  const errors = {}

  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }

  return errors
}

let Step4 = (props) => {
  const {
    handleSubmit,
    onPrevious,
    searchCriteria,
    onEditSearch,
    selectedPolicy,
    valid,
  } = props

  return (
    <form>
      <Row>
        <Col xsHidden smHidden md={3}>
          <div style={{ marginBottom: '25px' }}>
            <PurchaseSummary
              policy={selectedPolicy}
              onSelectAnotherPolicy={onPrevious}
            />
          </div>
          <SearchSummary
            searchCriteria={searchCriteria}
            onEditSearch={onEditSearch}
          />
        </Col>
        <Col mdHidden lgHidden xs={12} sm={12}>
          <div style={{ marginBottom: '25px' }}>
            <SearchSummary
              searchCriteria={searchCriteria}
              onEditSearch={onEditSearch}
              compact={true}
            />
          </div>
        </Col>
        <Col xs={12} sm={12} md={9}>
          <div className={styles.personalDetailsContainer}>
            <Card>
              <Header>
                <h5>PERSONAL DETAILS</h5>
                <small>Complete your personal details</small>
              </Header>
              <Content>
                <Row>
                  <Col xs={12} sm={6}>
                    <FormGroup bsSize="large">
                      <Field
                        name="firstName"
                        component={TextField}
                        type="text"
                        placeholder="First name"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={12} sm={6}>
                    <FormGroup bsSize="large">
                      <Field
                        name="lastName"
                        component={TextField}
                        type="text"
                        placeholder="Last name"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <FormGroup bsSize="large">
                      <Field
                        name="addressline1"
                        component={TextField}
                        type="text"
                        placeholder="Address line 1"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <FormGroup bsSize="large">
                      <Field
                        name="addressline2"
                        component={TextField}
                        type="text"
                        placeholder="Address line 2"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={8}>
                    <FormGroup bsSize="large">
                      <Field
                        name="stateOfResidence"
                        component={SelectField}
                        type="text"
                        placeholder="State"
                      >
                        <option disabled>State</option>
                        <option value="ACT">
                          Australian Capital Territory
                        </option>
                        <option value="NSW">New South Whales</option>
                        <option value="NT">Northern Territory</option>
                        <option value="QLD">Queensland</option>
                        <option value="SA">South Australia</option>
                        <option value="TAS">Tasmania</option>
                        <option value="WA">Western Australia</option>
                        <option value="VIC">Victoria</option>
                      </Field>
                    </FormGroup>
                  </Col>
                  <Col xs={12} sm={4}>
                    <FormGroup bsSize="large">
                      <Field
                        name="postcode"
                        component={TextField}
                        type="text"
                        placeholder="Postcode"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <FormGroup bsSize="large">
                      <Field
                        name="email"
                        component={TextField}
                        type="email"
                        placeholder="Email"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <FormGroup bsSize="large">
                      <Field
                        name="contacNumber"
                        component={TextField}
                        type="text"
                        placeholder="Contact number"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <FormGroup bsSize="large">
                      <Field
                        name="currentInsuranceProvider"
                        component={SelectField}
                        type="text"
                        placeholder="Current health insurance provider (optional)"
                      >
                        <option disabled>
                          Current health insurance provider (optional)
                        </option>
                        <option value="AHM">AHM</option>
                        <option value="NIB">NIB</option>
                        <option value="BUPA">Bupa</option>
                        <option value="MEDIBANK">MediBank</option>
                        <option value="LATROBE">Latrobe Health Services</option>
                      </Field>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <FormGroup bsSize="large">
                      <Field
                        name="currentMembershipNumber"
                        component={TextField}
                        type="text"
                        placeholder="Current membership number (optional)"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <FormGroup bsSize="large">
                      <Field
                        name="currentPolicyStartDate"
                        component={DateField}
                        dateFormat="DD/MM/YYYY"
                        showClearButton={false}
                        placeholder="Current policy start date (optional)"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Content>
            </Card>
          </div>

          <div className={styles.paymentOptionsContainer}>
            <Card>
              <Header>
                <h5>PAYMENT OPTIONS</h5>
                <small>Select your preferred payment option</small>
              </Header>
              <Content>
                <div style={{ marginBottom: '15px' }}>
                  <ButtonToolbar>
                    <ToggleButtonGroup
                      type="radio"
                      name="options"
                      defaultValue={1}
                      bsSize="large"
                    >
                      <ToggleButton value={1}>Credit Card</ToggleButton>
                      <ToggleButton value={2}>Bank Details</ToggleButton>
                    </ToggleButtonGroup>
                  </ButtonToolbar>
                </div>

                <Row>
                  <Col xs={12}>
                    <FormGroup bsSize="large">
                      <Field
                        name="cardHolderName"
                        component={TextField}
                        type="text"
                        placeholder="Card holder name"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12}>
                    <FormGroup bsSize="large">
                      <Field
                        name="cardNumber"
                        component={TextField}
                        type="text"
                        placeholder="Credit card number"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={4}>
                    <FormGroup bsSize="large">
                      <Field
                        name="cardExpiryDate"
                        component={TextField}
                        type="text"
                        placeholder="Expiry date (MM/YY)"
                      />
                    </FormGroup>
                  </Col>
                  <Col xs={12} sm={4}>
                    <FormGroup bsSize="large">
                      <Field
                        name="cardCCV"
                        component={TextField}
                        type="text"
                        placeholder="CCV"
                      />
                    </FormGroup>
                  </Col>
                </Row>
              </Content>
            </Card>
          </div>
        </Col>
      </Row>

      <div className={styles.buttonContainer}>
        <Button
          ghost
          onClick={onPrevious}
          size="xlarge"
          style={{ marginRight: '15px' }}
          type="button"
        >
          Back
        </Button>
        <Button
          primary
          onClick={handleSubmit}
          size="xlarge"
          disabled={!valid}
          type="button"
        >
          Buy Now
        </Button>
      </div>
    </form>
  )
}

Step4 = reduxForm({
  form: signupFormName,
  validate,
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(Step4)

Step4 = connect((state) => ({
  searchCriteria: getFormValues(searchFormName)(state),
}))(Step4)

export default Step4
