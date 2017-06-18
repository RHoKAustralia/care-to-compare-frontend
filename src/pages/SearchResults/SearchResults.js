import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PolicyStub from '../../components/PolicyStub';
import fundsImages from '../../assets/funds';
import foundationImages from '../../assets/foundations';
import './styles.css';

const results = [
  {
    name: 'Health fund 1',
    logo: fundsImages.bupa,
    benefits: {
      'General Dental': true,
      'Optical': true,
      'Physiotherapy': false,
      'Chiropractic': true,
      'Orthodontic': true,
      'Glucose Monitor': false,
      'Speech Therapy': true,
    }
  },
  {
    name: 'Health fund 2',
    logo: fundsImages.australianUnity,
    benefits: {
      'General Dental': true,
      'Optical': false,
      'Physiotherapy': true,
      'Chiropractic': true,
      'Orthodontic': false,
      'Glucose Monitor': false,
      'Speech Therapy': true,
    }
  },
  {
    name: 'Health fund 3',
    logo: fundsImages.nib,
    benefits: {
      'General Dental': false,
      'Optical': true,
      'Physiotherapy': true,
      'Chiropractic': false,
      'Orthodontic': true,
      'Glucose Monitor': false,
      'Speech Therapy': true,
    }
  },
];

class SearchResults extends Component {
  render() {
    return (
      <div className='search-results'>
        <div className='flash'>
          <h5>Thank you Jake!</h5>
        </div>

        <div className='search-results-wrapper'>
          <div className='summary'>
            <h3>Summary</h3>
            <ul>
              <li>Individual</li>
              <li>Location</li>
              <li>Combined</li>
              <li>Payment</li>
            </ul>
          </div>

          <div className='results row'>
            <h3>Choose a health fund</h3>
            {results.map(policy => (
              <PolicyStub
                key={policy.name}
                policy={policy}
              />
            ))}
          </div>
        </div>

        <div className='charities center-align'>
          <Link to='/checkout' className='btn waves-effect waves-light blue-grey darken-1'>
            Checkout
          </Link>
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
      </div>
    );
  }
}

export default SearchResults;
