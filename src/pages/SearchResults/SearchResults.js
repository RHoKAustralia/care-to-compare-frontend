import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PolicyStub from '../../components/PolicyStub';
import './styles.css';

const results = [
  {
    name: 'Health fund 1',
    logo: 'https://i.imgur.com/ZZorNT1.jpg',
    benefits: {
      'Something': true,
      'Something else': true,
      'Chunky bacon': false,
    }
  },
  {
    name: 'Health fund 2',
    logo: 'https://i.imgur.com/ZZorNT1.jpg',
    benefits: {
      'Something': true,
      'Something else': false,
      'Chunky bacon': true,
    }
  },
  {
    name: 'Health fund 3',
    logo: 'https://i.imgur.com/ZZorNT1.jpg',
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
            <h2>Thank you Jake!</h2>
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

        <button>
          <Link to='/checkout'>NEXT</Link>
        </button>
      </div>
    );
  }
}

export default SearchResults;
