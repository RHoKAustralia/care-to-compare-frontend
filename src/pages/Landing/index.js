import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from 'components/Button'
import Container from 'components/Container'
import Carousel from 'components/Carousel'
import ImageRow from 'components/ImageRow'
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
            <ImageRow images={Object.values(foundationImages)} />
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
                <Button>
                  <Link to="/search">Compare now</Link>
                </Button>
              </div>
            </div>

            <div className="right">
              <Carousel images={landingPageImages} />
            </div>
          </div>
        </Container>
        <div className="Landing-footer">
          <Container>
            <ImageRow images={Object.values(fundImages)} />
          </Container>
        </div>
      </div>
    )
  }
}

export default Landing
