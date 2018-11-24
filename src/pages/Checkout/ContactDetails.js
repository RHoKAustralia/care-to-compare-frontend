import React from 'react'
import { Link } from 'react-router-dom'
import Card, { Header, Content } from 'components/Card'

const ContactDetails = () => (
  <Card>
    <Header>Contact Details</Header>
    <Content>
      <Link to="/checkout/payment-details">Payment Details</Link>
    </Content>
  </Card>
)

export default ContactDetails
