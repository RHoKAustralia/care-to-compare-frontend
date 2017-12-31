import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from 'components/Button'
import { IconClose } from 'components/Icons'
import Card, { CardContent } from 'components/Card'
import './styles.css'

class PolicyStub extends Component {
  render() {
    const { policy } = this.props

    return (
      <div className="policy-stub">
        <div className="policy-stub-header">
          <img
            className="circle"
            src="https://source.unsplash.com/random/200x200"
            alt="placeholder"
          />
        </div>
        <Card>
          <CardContent>
            <div className="policy-stub-description center">
              <IconClose />
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
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default PolicyStub
