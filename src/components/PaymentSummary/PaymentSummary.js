import React from 'react'

import { Button } from '../'

const PaymentSummary = (props) => (
  <div>
    <h3>Purchase summary</h3>
    <div>
      $297.05 /month
    </div>
    <ul>
      <li><i className='fa fa-check green-text darken-2' /> Covers you for accident</li>
      <li><i className='fa fa-check green-text darken-2' /> No annual limit on</li>
      <li><i className='fa fa-check green-text darken-2' /> Emergency ambulance</li>
      <li><i className='fa fa-check green-text darken-2' /> Basic hospital services</li>
    </ul>
    <Button type="default">
      View SIS
    </Button>
  </div>
)

export default PaymentSummary
