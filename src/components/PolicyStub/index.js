import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CardPanel, Icon } from 'react-materialize'

import Button from 'components/Button'
import './styles.css'

class PolicyStub extends Component {
  render() {
    const { policy } = this.props

    return (
      <div className="policy-stub col offsets4 m4 l4">
        <div className="policy-stub-header">
          <img
            className="circle"
            src="https://source.unsplash.com/random/200x200"
            alt="placeholder"
          />
        </div>
        <CardPanel className="policy-stub-description center">
          <Icon className="right icon">close</Icon>
          <p>
            <strong>{policy.fundName}</strong>
          </p>
          <p className="policy-title">{policy.policyName}</p>
          <p className="policy-price">
            ${policy.monthlyPremium['$numberDecimal']}
          </p>
          <p>/month</p>
          <p>Hospitals and extra cover</p>
          <Button type="inverted">View SIS</Button>
          <div>
            <Link to="/checkout">
              <Button type="default">Buy Now</Button>
            </Link>
          </div>
        </CardPanel>
      </div>
    )
  }
}

export default PolicyStub
