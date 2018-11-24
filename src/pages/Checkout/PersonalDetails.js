import React from 'react'
import { Link } from 'react-router-dom'
import Card, { Header, Content } from 'components/Card'

const PersonalDetails = () => (
  <Card>
    <Header>Personal Details</Header>
    <Content>
      <Link to="/checkout/about-you/medicare-details">Medicare Details</Link>
    </Content>
  </Card>
)

export default PersonalDetails
