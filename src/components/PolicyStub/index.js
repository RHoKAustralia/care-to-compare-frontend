import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CardPanel, Icon } from 'react-materialize'

import Button from 'components/Button'
import './styles.css'

class PolicyStub extends Component {
  render() {
    const { policy } = this.props
    const { benefits } = policy

    return (
      <div className="policy-stub col offsets4 m4 l4">
        <div className="policy-stub-header">
          <img className="circle" src={policy.logo} alt="placeholder" />
        </div>
        <CardPanel className="policy-stub-description center">
          <Icon className="right icon">close</Icon>
          <p className="policy-title">{policy.name}</p>
          <p className="policy-price">
            ${policy.price}
            <span>.00</span>
          </p>
          <p>/month</p>
          <p>Hospitals and extra cover</p>
          <a href="#">View SIS</a>
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
