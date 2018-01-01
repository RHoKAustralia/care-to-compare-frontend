import React, { Component } from 'react'

import CharityBanner from 'components/CharityBanner'
import Grid, { Col } from 'components/Grid'
import PaymentSummary from 'components/PaymentSummary'
import PaymentOptionsForm from 'components/PaymentOptionsForm'
import SelectedPolicyInformation from 'components/SelectedPolicyInformation'
import UserDetailsForm from 'components/UserDetailsForm'
import UserSummary from 'components/UserSummary'
import Container from 'components/Container'

class Checkout extends Component {
  render() {
    return (
      <div>
        <Container>
          <Grid>
            <Col s={4}>
              <UserSummary />
              <PaymentSummary />
            </Col>
            <Col s={8}>
              <UserDetailsForm />
              <PaymentOptionsForm />
              <SelectedPolicyInformation />
            </Col>
          </Grid>
        </Container>
        <div>
          <CharityBanner />
        </div>
      </div>
    )
  }
}

export default Checkout
