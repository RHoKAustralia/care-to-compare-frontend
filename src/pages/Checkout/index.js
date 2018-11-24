import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Grid, { Col } from 'components/Grid'
import Container from 'components/Container'
import Card, { Header, Content } from 'components/Card'

import ReviewAndJoin from './ReviewAndJoin'
import PersonalDetails from './PersonalDetails'
import MedicareDetails from './MedicareDetails'
import LifetimeHealthcareLoading from './LifetimeHealthcareLoading'
import Rebate from './Rebate'
import ReviewRebate from './ReviewRebate'
import ContactDetails from './ContactDetails'
import PaymentDetails from './PaymentDetails'
import ConfirmCheckout from './ConfirmCheckout'

class Checkout extends Component {
  render() {
    return (
      <div>
        <Container>
          <Grid>
            <Col s={3}>
              <Card>
                <Header>Your Summary</Header>
                <Content>TODO</Content>
              </Card>
            </Col>
            <Col s={6}>
              <Route exact path="/checkout/" component={ReviewAndJoin} />
              <Route
                path="/checkout/about-you/personal-details"
                component={PersonalDetails}
              />
              <Route
                path="/checkout/about-you/medicare-details"
                component={MedicareDetails}
              />
              <Route
                path="/checkout/lifetime-healthcare-loading"
                component={LifetimeHealthcareLoading}
              />
              <Route path="/checkout/rebate" component={Rebate} />
              <Route path="/checkout/confirm-rebate" component={ReviewRebate} />
              <Route
                path="/checkout/contact-details"
                component={ContactDetails}
              />
              <Route
                path="/checkout/payment-details"
                component={PaymentDetails}
              />
              <Route path="/checkout/confirm" component={ConfirmCheckout} />
            </Col>
            <Col s={3}>
              <Card>
                <Header>Selected Policy</Header>
                <Content>TODO</Content>
              </Card>
            </Col>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Checkout
