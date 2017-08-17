import React, { Component } from 'react';
import { CardPanel, Icon} from 'react-materialize';
import './PolicyStub.css';

class PolicyStub extends Component {
  render() {
    const { policy } = this.props;
    const { benefits } = policy;

    return (
      <div className='policy-stub col offsets4 m4 l4'>
        <div className='policy-stub-header'>
          <img className="circle" src={policy.logo} alt="placeholder" />
        </div>
        <CardPanel className='policy-stub-description'>
          <Icon className="right icon">close</Icon>
          <p className="policy-title">{policy.name}</p>
          <p className="policy-price">${policy.price}<span>.00</span></p>
          <p className="center">/month</p>
          <ul>
            {Object.keys(benefits).map((key, i) => (
              <li key={key}>
                <i className={`fa fa-${benefits[key] ? 'check green-text darken-2' : 'times red-text darken-2'}`} /> {key}
              </li>
            ))}
          </ul>
        </CardPanel>
      </div>
    )
  }
}

export default PolicyStub;
