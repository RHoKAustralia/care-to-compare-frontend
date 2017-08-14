import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import foundationImages from '../../assets/foundations';
import fundImages from '../../assets/funds';
import { Button } from '../'
import './Landing.css';

const landingPageImages = [
  require('../../assets/landing-images/strokesurvivor.jpeg'),
  require('../../assets/landing-images/strokesurvivor1.jpeg'),
  require('../../assets/landing-images/strokesurvivor3 594x395.jpeg'),
]

class Landing extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true
    };

    return (
      <div>
        <div className="Landing-header">
          <div className='image-strip'>
            {
              Object.keys(foundationImages).map(function (index) {
                return (
                  <img key={index} src={foundationImages[index]} className="foundation-logo" alt="foundation-logo" height="100px" />
                );
              }, this)
            }
          </div>
        </div>

        <div className='landing-wrapper'>
          <div className='left'>
            <ul>
              <li><i className='fa fa-check green-text darken-2' /> Exclusively deal in health products</li>
              <li><i className='fa fa-check green-text darken-2' /> Find a policy right for you</li>
              <li><i className='fa fa-check green-text darken-2' /> It costs no more no matter where you buy</li>
              <li><i className='fa fa-check green-text darken-2' /> Buy through C2C and support Stroke Foundation</li>
            </ul>
          </div>

          <div className='right'>
            <Slider {...settings}>
              {landingPageImages.map(image => (
                <div style={{
                  backgroundImage: `url('${image}')`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  height: '100%'
                }}>
                </div>
              ))}
            </Slider>

            <Link to='/search' className='btn waves-effect waves-light blue-grey darken-1'>
              Compare now
            </Link>
          </div>
        </div>

        <div className="Landing-footer">
          <div className='image-strip'>
            {
              Object.keys(fundImages).map(function (index) {
                return (
                  <img key={index} src={fundImages[index]} className="fund-logo" alt="fund-logo" height="100px" />
                );
              }, this)
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
