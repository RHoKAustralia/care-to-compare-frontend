import React from 'react'

import Button from 'components/Button'
import Card, { Header, Content } from 'components/Card'
import { IconTick } from 'components/Icons'

const PaymentSummary = (props) => (
  <Card>
    <Header>Purchase summary</Header>
    <Content>
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
      <Button primary>
        <a href="./guide-to-sis-combined.pdf">Standard Information Statement</a>
      </Button>
    </Content>
  </Card>
)

export default PaymentSummary
