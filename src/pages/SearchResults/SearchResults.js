import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PolicyStub from '../../components/PolicyStub';
import fundsImages from '../../assets/funds';
import './styles.css';

const results = [
  {
    name: 'Health fund 1',
    logo: fundsImages.bupa,
    benefits: {
      'Something': true,
      'Something else': true,
      'Chunky bacon': false,
    }
  },
  {
    name: 'Health fund 2',
    logo: fundsImages.australianUnity,
    benefits: {
      'Something': true,
      'Something else': false,
      'Chunky bacon': true,
    }
  },
  {
    name: 'Health fund 3',
    logo: fundsImages.nib,
    benefits: {
      'Something': false,
      'Something else': true,
      'Chunky bacon': false,
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

        <div className='charities'>
          Charities
        </div>

        <Link to='/checkout' className='btn waves-effect waves-light blue-grey darken-1'>
          Checkout
        </Link>
      </div>
    );
  }
}

export default SearchResults;
