import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Container from 'components/Container'
import Carousel from 'components/Carousel'
import { IconTick } from 'components/Icons'
import foundationImages from 'assets/foundations'
import fundImages from 'assets/funds'
import './styles.css'

const landingPageImages = [
  require('../../assets/landing-images/strokesurvivor.jpeg'),
  require('../../assets/landing-images/strokesurvivor1.jpeg'),
  require('../../assets/landing-images/strokesurvivor3 594x395.jpeg'),
]

class Landing extends Component {
  render() {
    return (
      <div>
        <div className="Landing-header">
          <Container>
            <div className="image-strip">
              {Object.keys(foundationImages).map(function(index) {
                return (
                  <img
                    key={index}
                    src={foundationImages[index]}
                    className="foundation-logo"
                    alt="foundation-logo"
                    height="50%"
                  />
                )
              }, this)}
            </div>
          </Container>
        </div>
        <Container>
          <div className="landing-wrapper">
            <div className="left">
              <div className="wrapper-item">
                <ul>
                  <li>
                    <IconTick /> Exclusively deal in health products
                  </li>
                  <li>
                    <IconTick /> Find a policy right for you
                  </li>
                  <li>
                    <IconTick /> It costs no more no matter where you buy
                  </li>
                  <li>
                    <IconTick /> Buy through C2C and support Stroke Foundation
                  </li>
                </ul>
              </div>
              <div className="wrapper-item">
                <Link
                  to="/search"
                  className="btn btn-large waves-effect waves-light darken-1"
                >
                  Compare now
                </Link>
              </div>
            </div>

            <div className="right">
              <Carousel images={landingPageImages} />
            </div>
          </div>
        </Container>
        <div className="Landing-footer">
          <Container>
            <div className="image-strip">
              {Object.keys(fundImages).map(function(index) {
                return (
                  <img
                    key={index}
                    src={fundImages[index]}
                    className="fund-logo"
                    alt="fund-logo"
                    height="50px"
                  />
                )
              }, this)}
            </div>
          </Container>
        </div>
      </div>
    )
  }
}

export default Landing
