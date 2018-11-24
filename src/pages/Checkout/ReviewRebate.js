import React from 'react'
import { Link } from 'react-router-dom'
import Card, { Header, Content } from 'components/Card'

const ReviewRebate = () => (
  <Card>
    <Header>Review Rebate</Header>
    <Content>
      <Link to="/checkout/contact-details">Contact Details</Link>
    </Content>
  </Card>
)

export default ReviewRebate
