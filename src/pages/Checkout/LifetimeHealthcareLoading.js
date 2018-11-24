import React from 'react'
import { Link } from 'react-router-dom'
import Card, { Header, Content } from 'components/Card'

const LifetimeHealthcareLoading = () => (
  <Card>
    <Header>Lifetime Health Care Loading</Header>
    <Content>
      <Link to="/checkout/rebate">Rebate</Link>
    </Content>
  </Card>
)

export default LifetimeHealthcareLoading
