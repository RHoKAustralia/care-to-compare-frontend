import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'

import Button from 'components/Button'
import Card, { CardHeader, CardContent } from 'components/Card'
import Container from 'components/Container'
import Grid, { Col } from 'components/Grid'
import { IconTick } from 'components/Icons'
import survivorPhoto from 'assets/obligatory-stock-photo.jpeg'
import styles from './styles.css'

class Thanks extends Component {
  render() {
    return (
      <div>
        <div className={styles.header}>
          <Container>
            <h4>Thank you</h4>
            <p>
              Buying health insurance through Care to Compare? is good for you
              and good for charity
            </p>
          </Container>
          <div>
            <Container>
              <div className={styles.summary}>
                <Card>
                  <CardHeader>
                    <h6>Your health insurance</h6>
                  </CardHeader>
                  <CardContent>
                    <ul>
                      <li>
                        <IconTick /> Smart combination
                      </li>
                      <li>
                        <IconTick /> $279.05 per month
                      </li>
                      <li>
                        <IconTick /> Hospital and extras cover
                      </li>
                    </ul>
                    <Button primary>View SIS</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <h6>Your charity</h6>
                  </CardHeader>
                  <CardContent>
                    <p>
                      You'll be saving{' '}
                      <span className={styles.price}>$43.10</span> per month
                      with your new health insurance policy and supporting the
                      Stroke Foundation with an extra
                      <span className={styles.price}>$10 per month</span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </Container>
          </div>
        </div>
        <div className={styles.survivorStory}>
          <Container>
            <Grid>
              <Col s={4}>
                <img
                  className={styles.survivorPhoto}
                  src={survivorPhoto}
                  alt={'Jane'}
                />
              </Col>
              <Col s={8}>
                <h4>Jane Survivor Story</h4>
                <p>
                  My name is Jane and I am 43 years old, happy married and mum
                  to two 18 and 20 year old boys. I'm fit and healthy. Normal
                  blood pressure. Normal BMI. 12 weeks ago today, I woke up with
                  pins and needles in my right arm and leg. I'm a midwife and
                  had worked night shift the previous night, so I thought I'd
                  slept really well for once and hadn't moved much overnight
                  (I'm usually a restless sleeper)...
                </p>
                <Button primary>Read more</Button>
              </Col>
            </Grid>
          </Container>
        </div>
        <div className={styles.socialMediaInfo}>
          <Container>
            <h4>Keep up the great work.</h4>
            <p>
              Let your friends and family know about Care to Compare? Share on
            </p>
            <Button secondary>
              <SocialIcon
                url="#"
                network="facebook"
                color="#363f48"
                style={{ height: 30, width: 30 }}
              />{' '}
              Facebook
            </Button>
            <Button secondary>
              <SocialIcon
                url="#"
                network="twitter"
                color="#363f48"
                style={{ height: 30, width: 30 }}
              />{' '}
              Twitter
            </Button>
            <Button secondary>
              <SocialIcon
                url="#"
                network="instagram"
                color="#363f48"
                style={{ height: 30, width: 30 }}
              />{' '}
              Instagram
            </Button>
            <Button secondary>
              <SocialIcon
                url="#"
                network="email"
                color="#363f48"
                style={{ height: 30, width: 30 }}
              />{' '}
              Email
            </Button>
          </Container>
        </div>
        <div className={styles.spacer} />
      </div>
    )
  }
}

export default Thanks
