import React, { Component } from 'react';
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
      autoplaySpeed: 2000,
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
        <hr/>
        Landing

        <div className="float: left; width: 480px;">

        </div>
        <div className="float: right; width: 480px;">
          <Slider {...settings}>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
            <div><h3>5</h3></div>
            <div><h3>6</h3></div>
          </Slider>

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
