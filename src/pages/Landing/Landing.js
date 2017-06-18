import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import foundationImages from '../../assets/foundations/images';
import fundImages from '../../assets/funds/images';
import './Landing.css';

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
          {
            Object.keys(foundationImages).map(function (index) {
              return (
                <img key={index} src={foundationImages[index]} className="foundation-logo" alt="foundation-logo" height="100px" />
              );
            }, this)
          }
        </div>

        <div className='landing-wrapper'>
          <div className='left'>
            <ul>
              <li><i className='fa fa-check' /> Exclusively deal in health products</li>
              <li><i className='fa fa-check' /> Find a policy right for you</li>
              <li><i className='fa fa-check' /> It costs no more no matter where you buy</li>
              <li><i className='fa fa-check' /> Buy through C2C and support Stroke Foundation</li>
            </ul>
          </div>

          <div className='right'>
            <Slider {...settings}>
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
              <div><h3>5</h3></div>
              <div><h3>6</h3></div>
            </Slider>

            <Link to='/search'>
              <button>
                Compare now
              </button>
            </Link>
          </div>
        </div>

        <div className="Landing-footer">
          {
            Object.keys(fundImages).map(function (index) {
              return (
                <img key={index} src={fundImages[index]} className="fund-logo" alt="fund-logo" height="100px" />
              );
            }, this)
          }
        </div>
      </div>
    );
  }
}

export default Landing;
