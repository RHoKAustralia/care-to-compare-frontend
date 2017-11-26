import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'

import Button from 'components/Button'
import Container from 'components/Container'
import './styles.css'

class Thanks extends Component {
  render() {
    return (
      <div>
        <div className="thanks-header">
          <Container>
            <h4>Thank you</h4>
            <p>
              Buying health insurance through Care to Compare? is good for you
              and good for charity
            </p>
          </Container>
          <div className="row">
            <Container>
              <div className="thanks-summary">
                <div className="card">
                  <h6 className="heading">Your health insurance</h6>
                  <div className="content">
                    <ul>
                      <li><i className="fa fa-check green-text darken-2" />{' '}Smart combination</li>
                      <li><i className="fa fa-check green-text darken-2" />{' '}$279.05 per month</li>
                      <li><i className="fa fa-check green-text darken-2" />{' '}Hospital and extras cover</li>
                    </ul>
                    <Button type="primary">View SIS</Button>
                  </div>
                </div>
                <div className="card">
                  <h6 className="heading">Your charity</h6>
                  <div className="content">
                    <p>
                      You'll be saving <span className="price">$43.10</span> per month with your new health insurance
                      policy and supporting the Stroke Foundation with an extra <span className="price">$10</span> per
                      month
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        </div>
        <div className="survivor-story">
          <Container>
            <h4>Jane Survivor Story</h4>
            <p>
              My name is Jane and I am 43 years old, happy married and mum to
              two 18 and 20 year old boys. I'm fit and healthy. Normal blood
              pressure. Normal BMI. 12 weeks ago today, I woke up with pins and
              needles in my right arm and leg. I'm a midwife and had worked
              night shift the previous night, so I thought I'd slept really well
              for once and hadn't moved much overnight (I'm usually a restless
              sleeper)...
            </p>
            <Button type="default">Read more</Button>
          </Container>
        </div>
        <div className="share-info">
          <Container>
            <h4>Keep up the great work.</h4>
            <p>
              Let your friends and family know about Care to Compare? Share on
            </p>
            <Button type="secondary">
              <SocialIcon
                url="#"
                network="facebook"
                color="#363f48"
                style={{ height: 30, width: 30 }}
              />{' '}
              Facebook
            </Button>
            <Button type="secondary">
              <SocialIcon
                url="#"
                network="twitter"
                color="#363f48"
                style={{ height: 30, width: 30 }}
              />{' '}
              Twitter
            </Button>
            <Button type="secondary">
              <SocialIcon
                url="#"
                network="instagram"
                color="#363f48"
                style={{ height: 30, width: 30 }}
              />{' '}
              Instagram
            </Button>
            <Button type="secondary">
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
        <div className="thanks-page-spacer">

        </div>
      </div>
    )
  }
}

export default Thanks
