import React from 'react'
import { Link } from 'react-router-dom'
import Card, { Header, Content } from 'components/Card'

const ConfirmCheckout = () => (
  <Card>
    <Header>Complete and Submit</Header>
    <Content>
      <Link to="/thanks">Confirm</Link>
    </Content>
  </Card>
)

export default ConfirmCheckout
