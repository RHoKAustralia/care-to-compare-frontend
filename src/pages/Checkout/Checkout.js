import React, { Component } from 'react'

import { UserDetailsForm, Button } from '../../components'

class Checkout extends Component {
  render() {
    return (
      <div className='row'>
        <div className='col m4'>
          Your Summary
        </div>
        <div className='col m8'>
          <UserDetailsForm />
          <Button type='default'>Checkout</Button>
        </div>
      </div>
    );
  }
}

export default Checkout;
