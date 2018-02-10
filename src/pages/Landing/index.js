import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import { withRouter } from 'react-router'

import Container from 'components/Container'
import ImageRow from 'components/ImageRow'
import CheckList from 'components/CheckList'
import Button from 'components/Button'
import Carousel from 'components/Carousel'

import foundationImages from 'assets/foundations'
import fundImages from 'assets/funds'
import styles from './styles.css'

const landingPageImages = [
  { alt: '', src: require('../../assets/landing-images/strokesurvivor.jpeg') },
  { alt: '', src: require('../../assets/landing-images/strokesurvivor1.jpeg') },
  {
    alt: '',
    src: require('../../assets/landing-images/strokesurvivor3 594x395.jpeg'),
  },
]

const checkListItems = [
  { checked: true, label: 'Exclusively deal in health products' },
  { checked: true, label: 'Exclusively deal in health products' },
  { checked: true, label: 'Find a policy right for you' },
  { checked: true, label: 'It costs no more no matter where you buy' },
  { checked: true, label: 'Buy through C2C and support Stroke Foundation' },
]

class Landing extends Component {
  render() {
    const { history } = this.props

    return (
      <div>
        <div className={styles.header}>
          <Container>
            <Row>
              <Col sm={12} xsHidden>
                <ImageRow images={Object.values(foundationImages)} />
              </Col>
            </Row>
          </Container>
        </div>

        <Container>
          <Row>
            <Col xs={12} smOffset={2} mdOffset={0} md={6}>
              <div className={styles.siteItems}>
                <CheckList items={checkListItems} itemSpacing="large" />

                <div className={styles.mainButtonContainer}>
                  <Button
                    primary
                    onClick={() => history.push('/search')}
                    size="xlarge"
                    type="button"
                  >
                    Compare Now
                  </Button>
                </div>
              </div>
            </Col>

            <Col xsHidden smHidden md={6}>
              <Carousel images={landingPageImages} />
            </Col>
          </Row>
        </Container>

        <div className={styles.footer}>
          <Container>
            <Row>
              <Col sm={12} xsHidden>
                <ImageRow images={Object.values(fundImages)} />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default withRouter(Landing)
