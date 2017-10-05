import React, { Component } from 'react'

import {
  CharityBanner,
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
        <div className='row'>
          <CharityBanner />
        </div>
      </div>
    );
  }
}

export default Checkout;
