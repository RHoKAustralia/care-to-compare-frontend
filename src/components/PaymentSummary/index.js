import React from 'react'

import Button from 'components/Button'
import { IconTick } from 'components/Icons'

const PaymentSummary = (props) => (
  <div>
    <h3>Purchase summary</h3>
    <div>$297.05 /month</div>
    <ul>
      <li>
        <IconTick /> Covers you for accident
      </li>
      <li>
        <IconTick /> No annual limit on
      </li>
      <li>
        <IconTick /> Emergency ambulance
      </li>
      <li>
        <IconTick /> Basic hospital services
      </li>
    </ul>
    <Button type="default">
      <a href="./guide-to-sis-combined.pdf">View SIS</a>
    </Button>
  </div>
)

export default PaymentSummary
