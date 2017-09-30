import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import foundationImages from '../../assets/foundations';
import fundImages from '../../assets/funds';
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
            <div className='wrapper-item'>
              <ul>
                <li><i className='fa fa-check green-text darken-2' /> Exclusively deal in health products</li>
                <li><i className='fa fa-check green-text darken-2' /> Find a policy right for you</li>
                <li><i className='fa fa-check green-text darken-2' /> It costs no more no matter where you buy</li>
                <li><i className='fa fa-check green-text darken-2' /> Buy through C2C and support Stroke Foundation</li>
              </ul>
            </div>
            <div className='wrapper-item'>
              <Link to='/search' className='btn btn-large waves-effect waves-light darken-1'>


                Compare now
              </Link>
            </div>
          </div>


          <div className='right'>
            <Slider {...settings}>
              {landingPageImages.map((image, index) => (
                <div
                  key={`carousel-image-${index}`}
                  style={{
                    backgroundImage: `url('${image}')`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    height: '100%'
                  }}
                >
                </div>
              ))}
            </Slider>


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
