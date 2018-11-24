import React from 'react'
import { Link } from 'react-router-dom'
import Card, { Header, Content } from 'components/Card'

const MedicareDetails = () => (
  <Card>
    <Header>Medicare Details</Header>
    <Content>
      <Link to="/checkout/about-you/previous-insurance-details">
        Previous Insurance Details
      </Link>
    </Content>
  </Card>
)

export default MedicareDetails
