import React, { Component } from 'react';
import './styles.css';

class PolicyStub extends Component {
  render() {
    const { policy } = this.props;
    const { benefits } = policy;

    return (
      <div className='policy-stub col s4'>
        <div className='policy-stub-header'>
          <img src={policy.logo} />
        </div>
        <div>
          <h3>{policy.name}</h3>
          <ul>
            {Object.keys(benefits).map((key, i) => (
              <li key={key}><i className={`fa fa-${benefits[key] ? 'check' : 'times'}`} /> {key}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PolicyStub;
