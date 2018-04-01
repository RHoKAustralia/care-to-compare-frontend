import React, { Component } from 'react'
import lodash from 'lodash'

import Card, { Content } from 'components/Card'
import Button from 'components/Button'
import { IconUp, IconDown } from 'components/Icons'

import styles from './styles.css'
import { extrasInclusionsOptions, hospitalInclusionsOptions } from './constants'

const dummyThumbnail = require('../../assets/dummy_thumbnail.png')

export const getInclusionLabelByValue = (inclusionLabelLookup, value) => {
  return lodash.find(
    inclusionLabelLookup,
    (inclusion) => inclusion.value === value,
  ).label
}

const InclusionItem = ({
  inclusionLabelLookup,
  inclusion: { category, covered },
}) => {
  return (
    <li>
      <span className="fa-li">
        {covered ? (
          <i className="fa fa-check" style={{ color: 'green' }} />
        ) : (
          <i className="fa fa-times" style={{ color: 'red' }} />
        )}
      </span>
      {getInclusionLabelByValue(inclusionLabelLookup, category)}
    </li>
  )
}

const InclusionList = ({ title, policy, inclusions, inclusionLabelLookup }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <p className="h4">{title}</p>
      <ul className="fa-ul">
        {lodash.map(inclusions, (inclusion, index) => (
          <InclusionItem
            inclusion={inclusion}
            key={`${policy.sisCode}_${inclusion.category}`}
            inclusionLabelLookup={inclusionLabelLookup}
          />
        ))}
      </ul>
    </div>
  )
}

export const AdditionalDetails = ({ policy, policyType }) => {
  return (
    <div className="text-left">
      {(policyType === 'HOSPITAL' || policyType === 'COMBINED') && (
        <InclusionList
          title="Hospital Inclusions"
          policy={policy}
          inclusions={policy.hospitalComponent.inclusions}
          inclusionLabelLookup={hospitalInclusionsOptions}
        />
      )}

      {(policyType === 'EXTRAS' || policyType === 'COMBINED') && (
        <InclusionList
          title="Extras Inclusions"
          policy={policy}
          inclusions={policy.extrasComponent.inclusions}
          inclusionLabelLookup={extrasInclusionsOptions}
        />
      )}
    </div>
  )
}

class PolicyResultsViewer extends Component {
  state = { expandDetails: false }

  toggleDetails = () => {
    this.setState(({ expandDetails }) => ({ expandDetails: !expandDetails }))
  }

  render() {
    const {
      pagingMeta,
      policies,
      policyType,
      prevPage,
      nextPage,
      selectPolicy,
    } = this.props
    const { expandDetails } = this.state

    return (
      <div>
        <div>
          {pagingMeta.page > 1 ? (
            <div
              className={[styles.prevPageButton, styles.resultNavButton].join(
                ' ',
              )}
              onClick={prevPage}
            >
              <i className="fa fa-chevron-circle-left fa-4x" />
            </div>
          ) : (
            <span />
          )}
          {pagingMeta.page < pagingMeta.totalPages ? (
            <div
              className={[styles.nextPageButton, styles.resultNavButton].join(
                ' ',
              )}
              onClick={nextPage}
            >
              <i className="fa fa-chevron-circle-right fa-4x" />
            </div>
          ) : (
            <span />
          )}
        </div>
        <div className={styles.policyResultsContainer}>
          {policies.map((policy) => (
            <div key={policy.id} className={styles.policyResult}>
              <div className={styles.fundThumbnailContainer}>
                <img
                  src={dummyThumbnail}
                  className={styles.fundThumbnail}
                  alt={policy.fundName}
                />
              </div>
              <div className={styles.fundInfoContainer}>
                <Card>
                  <Content>
                    <div
                      style={{
                        height: '75px',
                        textOverflow: 'ellipsis',
                        marginTop: '60px',
                      }}
                    >
                      <strong>{policy.policyName}</strong>
                    </div>
                    <div>
                      <div style={{ fontSize: '24px' }}>
                        ${policy.monthlyPremium}
                      </div>
                      <strong>{'/ month'}</strong>
                    </div>

                    <div style={{ marginTop: '20px' }}>
                      {expandDetails && (
                        <AdditionalDetails
                          policy={policy}
                          policyType={policyType}
                        />
                      )}
                    </div>

                    <div style={{ marginTop: '20px' }}>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={
                          'http://assets.caretocompare.com.au/sis/' +
                          policy.sisCode.split('/').join('-') +
                          '.pdf'
                        }
                      >
                        View SIS
                      </a>
                    </div>
                    <div className={styles.selectFundBtnContainer}>
                      <Button
                        ghost
                        block
                        onClick={(event) => selectPolicy(policy)}
                        size="medium"
                      >
                        Select Policy
                      </Button>
                    </div>
                  </Content>
                </Card>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.moreDetailsContainer}>
          <Button
            primary
            block
            size="medium"
            type="button"
            onClick={this.toggleDetails}
          >
            <span style={{ marginRight: '15px' }}>
              {expandDetails ? 'Less' : 'More'}
              {' details'}
            </span>
            {expandDetails ? <IconUp /> : <IconDown />}
          </Button>
        </div>
      </div>
    )
  }
}

export default PolicyResultsViewer
