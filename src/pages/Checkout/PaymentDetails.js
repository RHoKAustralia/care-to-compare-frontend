import React from 'react'
import { Link } from 'react-router-dom'
import Card, { Header, Content } from 'components/Card'

const PaymentDetails = () => (
  <Card>
    <Header>Payment Details</Header>
    <Content>
      <Link to="/checkout/confirm">Confirm checkout</Link>
    </Content>
  </Card>
)

export default PaymentDetails
