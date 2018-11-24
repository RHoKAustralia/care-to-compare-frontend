import React from 'react'
import { Link } from 'react-router-dom'
import Card, { Header, Content } from 'components/Card'

const ReviewAndJoin = () => (
  <Card>
    <Header>Review and Join</Header>
    <Content>
      <Link to="/checkout/about-you/personal-details">Personal Details</Link>
    </Content>
  </Card>
)

export default ReviewAndJoin
