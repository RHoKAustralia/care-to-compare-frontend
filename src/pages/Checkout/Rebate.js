import React from 'react'
import { Link } from 'react-router-dom'
import Card, { Header, Content } from 'components/Card'

const Rebate = () => (
  <Card>
    <Header>Rebate</Header>
    <Content>
      <Link to="/checkout/confirm-rebate">Confirm Rebate</Link>
    </Content>
  </Card>
)

export default Rebate
