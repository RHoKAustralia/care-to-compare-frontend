import React, { Component } from 'react'
import { Panel, Image, Button } from 'react-bootstrap'

import { AdditionalDetails } from './PolicyResultsViewer'
import { IconUp, IconDown } from 'components/Icons'

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
        <Panel>
          <Panel.Heading>
            <div className="h5">PURCHASE SUMMARY</div>
          </Panel.Heading>
          <Panel.Body>
            <div
              className="text-center"
              style={{
                marginTop: '-25px',
              }}
            >
              <div>
                <Image
                  src={dummyThumbnail}
                  circle
                  className={styles.fundThumbnail}
                  title={policy.fundName}
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
                <Button block onClick={this.togglePolicyDetails}>
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
                <Button block>View SIS</Button>
              </div>
              <div
                style={{
                  marginTop: '10px',
                }}
              >
                <Button block onClick={onSelectAnotherPolicy}>
                  Select Another Policy
                </Button>
              </div>
            </div>
          </Panel.Body>
        </Panel>
      </div>
    )
  }
}

export default PurchaseSummary
