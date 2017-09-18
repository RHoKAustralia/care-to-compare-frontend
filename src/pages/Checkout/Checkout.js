import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {
  Button,
  PaymentSummary,
  PaymentOptionsForm,
  UserDetailsForm,
  UserSummary,
} from '../../components'

class Checkout extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col m4'>
          <UserSummary />
          <PaymentSummary />
        </div>
        <div className='col m8'>
          <UserDetailsForm />
          <PaymentOptionsForm />
          <Button type='default'>
            <Link to="/thanks">Buy now</Link>
          </Button>
        </div>
      </div>
    );
  }
}

export default Checkout;
