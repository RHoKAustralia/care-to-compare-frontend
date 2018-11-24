import React, { Component } from 'react'

import CharityBanner from 'components/CharityBanner'
import Grid, { Col } from 'components/Grid'
import Container from 'components/Container'
import Card, { Header, Content } from 'components/Card'

class Checkout extends Component {
  render() {
    return (
      <div>
        <Container>
          <Grid>
            <Col s={3}>
              <Card>
                <Header>Your Summary</Header>
                <Content>TODO</Content>
              </Card>
            </Col>
            <Col s={6}>
              <Card>
                <Header>Content here</Header>
                <Content>TODO</Content>
              </Card>
            </Col>
            <Col s={3}>
              <Card>
                <Header>Selected Policy</Header>
                <Content>TODO</Content>
              </Card>
            </Col>
          </Grid>
        </Container>
      </div>
    )
  }
}

export default Checkout
