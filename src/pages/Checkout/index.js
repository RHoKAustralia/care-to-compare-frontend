import React, { Component } from 'react'

import {
  CharityBanner,
  Container,
  PaymentSummary,
  PaymentOptionsForm,
  SelectedPolicyInformation,
  UserDetailsForm,
  UserSummary,
} from '../../components'

class Checkout extends Component {
  render() {
    return (
      <div>
        <Container>
          <div className='row'>
            <div className='col m4'>
              <UserSummary />
              <PaymentSummary />
            </div>
            <div className='col m8'>
              <UserDetailsForm />
              <PaymentOptionsForm />
              <SelectedPolicyInformation />
            </div>
          </div>
        </Container>
        <div className='row'>
          <CharityBanner />
        </div>
      </div>
    );
  }
}

export default Checkout;
