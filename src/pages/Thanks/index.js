import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { SocialIcon } from 'react-social-icons'

import Button from 'components/Button'
import CheckList from 'components/CheckList'
import Card, { Header, Content } from 'components/Card'
import Container from 'components/Container'
import Grid, { Col } from 'components/Grid'
import { IconTick } from 'components/Icons'
import survivorPhoto from 'assets/paul-fink-survivor.jpg'
import styles from './styles.css'

const dummyThumbnail = require('../../assets/dummy_thumbnail.png')

class Thanks extends Component {
  render() {
    let { policy, userDetails } = this.props

    if (!policy || !userDetails) {
      return <Redirect to="/landing" />
    }
    // policy = {}
    // userDetails = {}

    // const userDetails = {
    //   name: 'Prav Perera'
    // }
    // const policy = {
    //   policyName: 'ABC Policy Blah Blah',
    //   monthlyPremium: '3234',
    //   policyType: 'COMBINED'
    // }

    const checkListItems = [
      { label: policy.policyName, checked: true },
      { label: `$${policy.monthlyPremium} per month`, checked: true },
      { label: `${policy.policyType} cover`, checked: true },
    ]

    return (
      <div>
        <div className={styles.header}>
          <Container>
            <h3>Thanks {userDetails.name}.</h3>
            <p>
              Buying health insurance through <strong>Care to Compare?</strong>{' '}
              is good for you and good for charity
            </p>
          </Container>

          <Container>
            <div className={styles.summary}>
              <div>
                <Card>
                  <Header>
                    <h5>Your health insurance</h5>
                  </Header>
                  <Content>
                    <div>
                      <div style={{ marginTop: '-140px' }}>
                        <img
                          src={dummyThumbnail}
                          className={styles.fundThumbnail}
                          alt="TODO"
                        />
                      </div>
                      <div
                        style={{
                          paddingTop: '80px',
                          paddingLeft: '30px',
                          paddingRight: '30px',
                          textAlign: 'left',
                          minWidth: '400px',
                        }}
                      >
                        <div style={{ fontSize: '14px' }}>
                          <CheckList
                            items={checkListItems}
                            itemSpacing="medium"
                          />
                        </div>
                        <div
                          style={{
                            marginTop: '20px',
                            width: '50%',
                            marginLeft: '25%',
                          }}
                        >
                          <Button ghost size="medium" block>
                            View SIS
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Content>
                </Card>
              </div>
            </div>
          </Container>
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
                <h4>Your Impact</h4>
                <p>
                  Three years ago Paul Fink was not able to walk, but with a lot
                  of hard work, he tackled more than 1000 steps over the Sydney
                  Harbour Bridge.
                </p>
                <Button size="medium" primary>
                  Paul's Story
                </Button>
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
            <Button secondary size="medium">
              <SocialIcon
                url="#"
                network="facebook"
                color="#eee5e5"
                style={{ height: 30, width: 30 }}
              />
              <span>Facebook</span>
            </Button>
            <Button secondary size="medium">
              <SocialIcon
                url="#"
                network="twitter"
                color="#eee5e5"
                style={{ height: 30, width: 30 }}
              />
              <span>Twitter</span>
            </Button>
            <Button secondary size="medium">
              <SocialIcon
                url="#"
                network="instagram"
                color="#eee5e5"
                style={{ height: 30, width: 30 }}
              />
              <span>Instagram</span>
            </Button>
            <Button secondary size="medium">
              <SocialIcon
                url="#"
                network="email"
                color="#eee5e5"
                style={{ height: 30, width: 30 }}
              />
              <span>Email</span>
            </Button>
          </Container>
        </div>
        <div className={styles.spacer} />
      </div>
    )
  }
}

Thanks = connect((state) => ({
  policy: state.policyPurchase.policy,
  userDetails: state.policyPurchase.userDetails,
}))(Thanks)

export default Thanks
