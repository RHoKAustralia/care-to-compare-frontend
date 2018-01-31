import React, { Component } from 'react'
import { Grid, Row, Col, Carousel, Button } from 'react-bootstrap'
import { withRouter } from 'react-router'

import Container from 'components/Container'
import ImageRow from 'components/ImageRow'
import foundationImages from 'assets/foundations'
import fundImages from 'assets/funds'
import styles from './styles.css'

const landingPageImages = [
  require('../../assets/landing-images/strokesurvivor.jpeg'),
  require('../../assets/landing-images/strokesurvivor1.jpeg'),
  require('../../assets/landing-images/strokesurvivor3 594x395.jpeg'),
]

const checkListItems = [
  'Exclusively deal in health products',
  'Exclusively deal in health products',
  'Find a policy right for you',
  'It costs no more no matter where you buy',
  'Buy through C2C and support Stroke Foundation',
]

class Landing extends Component {
  render() {
    const { history } = this.props

    return (
      <Grid bsClass="">
        <Row>
          <Col md={12} xsHidden>
            <div className={styles.header}>
              <Container>
                <ImageRow images={Object.values(foundationImages)} />
              </Container>
            </div>
          </Col>
        </Row>

        <Row>
          <Col
            xs={12}
            smOffset={2}
            mdOffset={1}
            md={4}
            className={styles.siteItems}
          >
            <ul className="fa-ul">
              {checkListItems.map((item, index) => (
                <li key={index}>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="text-center">
              <Button
                bsSize="large"
                className={styles.mainButton}
                onClick={() => history.push('/search')}
              >
                Compare Now
              </Button>
            </div>
          </Col>

          <Col xsHidden smHidden md={6}>
            <Carousel controls={false} interval={2000}>
              {landingPageImages.map((image, index) => (
                <Carousel.Item key={`carousel_${image}`}>
                  <div className={styles.carouselImageContainer}>
                    <img
                      src={image}
                      width="100%"
                      height="100%"
                      alt="Images of survivors"
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>

        <Row>
          <Col md={12} xsHidden>
            <div className={styles.footer}>
              <Container>
                <ImageRow images={Object.values(fundImages)} />
              </Container>
            </div>
          </Col>
        </Row>
      </Grid>
    )
  }
}

export default withRouter(Landing)
