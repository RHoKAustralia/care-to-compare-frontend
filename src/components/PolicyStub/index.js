import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Button from 'components/Button'
import { IconClose } from 'components/Icons'
import Card, { CardContent } from 'components/Card'
import styles from './styles.css'

class PolicyStub extends Component {
  render() {
    const { policy } = this.props

    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <img
            className={styles.policyImage}
            src="https://source.unsplash.com/random/200x200"
            alt="placeholder"
          />
        </div>
        <Card>
          <CardContent>
            <div className={styles.policyDescription}>
              <IconClose />
              <p>
                <strong>{policy.fundName}</strong>
              </p>
              <p className={styles.policyName}>{policy.policyName}</p>
              <p className={styles.policyPrice}>
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
