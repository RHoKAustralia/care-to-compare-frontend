import React from 'react'
import { Link } from 'react-router-dom'
import Card, { Header, Content } from 'components/Card'

const PreviousInsuranceDetails = () => (
  <Card>
    <Header>Previous Insurance Details</Header>
    <Content>
      <Link to="/checkout/lifetime-healthcare-loading">
        Lifetime Healthcare Loading
      </Link>
    </Content>
  </Card>
)

export default PreviousInsuranceDetails
