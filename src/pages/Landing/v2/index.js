import React, { Component } from 'react'
import classnames from 'classnames'

import Button from 'components/Button'
import Container from 'components/Container'
import Grid, { Col } from 'components/Grid'
import CustomerTestimonials from './CustomerTestimonials'

import fundImages from 'assets/funds'
import foundationImages from 'assets/foundations'
import styles from './styles.css'

class Landing extends Component {
  render() {
    const { history } = this.props

    return (
      <div className={styles.root}>
        <Container>
          <p className={classnames(styles.content, styles.tagline)}>
            You're on your way to getting the right health insurance for you and
            supporting great charities when you compare and buy health insurance
            with <strong>Care to Compare</strong>.
          </p>
          <div className={styles.showcase}>
            <div className={styles.content}>
              <h2 className={styles.subheading}>
                We partner with these providers
              </h2>
              <Grid>
                {Object.values(fundImages).map((imageUrl, index) => (
                  <Col s={4} key={index}>
                    <img
                      src={imageUrl}
                      className={styles.companyIcon}
                      alt={imageUrl}
                    />
                  </Col>
                ))}
              </Grid>
            </div>
            <div className={styles.content}>
              <h2 className={styles.subheading}>To help these charities</h2>
              <Grid>
                {Object.values(foundationImages).map((imageUrl, index) => (
                  <Col s={4} key={index}>
                    <img
                      src={imageUrl}
                      className={styles.companyIcon}
                      alt={imageUrl}
                    />
                  </Col>
                ))}
              </Grid>
            </div>
          </div>
        </Container>
        <div className={styles.callToAction}>
          <Button
            primary
            onClick={() => history.push('/search')}
            size="xlarge"
            type="button"
          >
            Compare Now
          </Button>
          <Container>
            <div className={styles.content}>
              <CustomerTestimonials />
            </div>
          </Container>
        </div>
      </div>
    )
  }
}

export default Landing
