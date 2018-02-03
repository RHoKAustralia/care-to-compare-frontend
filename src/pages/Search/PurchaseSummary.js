import React, { Component } from 'react'

import { AdditionalDetails } from './PolicyResultsViewer'
import { IconUp, IconDown } from 'components/Icons'
import Card, { Content, Header } from 'components/Card'
import Button from 'components/Button'

import styles from './styles.css'
const dummyThumbnail = require('../../assets/dummy_thumbnail.png')

class PurchaseSummary extends Component {
  state = {
    showDetails: false,
  }

  togglePolicyDetails = () => {
    this.setState({ showDetails: !this.state.showDetails })
  }

  render() {
    const { policy, onSelectAnotherPolicy } = this.props
    const { showDetails } = this.state

    return (
      <div className={styles.purchaseSummaryContainer}>
        <Card>
          <Header>
            <div>PURCHASE SUMMARY</div>
          </Header>
          <Content>
            <div
              style={{
                marginTop: '-25px',
                textAlign: 'center',
              }}
            >
              <div>
                <img
                  src={dummyThumbnail}
                  className={styles.fundThumbnail}
                  alt={policy.fundName}
                />
              </div>
              <div
                style={{
                  marginTop: '20px',
                }}
              >
                <strong>{policy.policyName}</strong>
              </div>
              <div
                style={{
                  marginTop: '20px',
                }}
              >
                <div
                  style={{
                    fontSize: '24px',
                  }}
                >
                  ${policy.monthlyPremium}
                </div>
                <strong>{'/ month'}</strong>
              </div>
              {showDetails && (
                <div
                  style={{
                    marginTop: '20px',
                  }}
                >
                  <AdditionalDetails
                    policy={policy}
                    policyType={policy.policyType}
                  />
                </div>
              )}
              <div
                style={{
                  marginTop: '20px',
                }}
              >
                <Button
                  ghost
                  block
                  size="small"
                  onClick={this.togglePolicyDetails}
                  type="button"
                >
                  {showDetails ? 'Less' : 'More'}
                  {' details  '}
                  {showDetails ? <IconUp /> : <IconDown />}
                </Button>
              </div>
              <div
                style={{
                  marginTop: '10px',
                }}
              >
                <Button block ghost size="small" type="button">
                  View SIS
                </Button>
              </div>
              <div
                style={{
                  marginTop: '10px',
                }}
              >
                <Button
                  ghost
                  block
                  size="small"
                  onClick={onSelectAnotherPolicy}
                  type="button"
                >
                  Select Another Policy
                </Button>
              </div>
            </div>
          </Content>
        </Card>
      </div>
    )
  }
}

export default PurchaseSummary
