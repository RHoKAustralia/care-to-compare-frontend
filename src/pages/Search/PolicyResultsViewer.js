import React from 'react'
import { Button, Image } from 'react-bootstrap'
import lodash from 'lodash'

import styles from './styles.css'
import { extrasInclusionsOptions, hospitalInclusionsOptions } from './constants'

const dummyThumbnail = require('../../assets/dummy_thumbnail.png')

const getInclusionLabelByValue = (inclusionLabelLookup, value) => {
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

const PolicyResultsViewer = ({
  pagingMeta,
  policies,
  policyType,
  prevPage,
  nextPage,
  selectPolicy,
  showPolicyDetails,
}) => {
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
      <div className={styles.resultPagingContainer}>
        {policies.map((policy) => (
          <div key={policy.id} className={styles.policyResult}>
            <div className={styles.fundThumbnailContainer}>
              <Image
                src={dummyThumbnail}
                circle
                className={styles.fundThumbnail}
                title={policy.fundName}
              />
            </div>
            <div className={styles.fundInfoContainer}>
              <div style={{ height: '75px', textOverflow: 'ellipsis' }}>
                <strong>{policy.policyName}</strong>
              </div>
              <div>
                <div style={{ fontSize: '24px' }}>${policy.monthlyPremium}</div>
                <strong>{'/ month'}</strong>
              </div>

              <div style={{ marginTop: '20px' }}>
                {showPolicyDetails && (
                  <AdditionalDetails policy={policy} policyType={policyType} />
                )}
              </div>

              <div style={{ marginTop: '20px' }}>
                <a>View SIS</a>
              </div>
              <div className={styles.selectFundBtnContainer}>
                <Button
                  block
                  bsStyle="success"
                  onClick={(event) => selectPolicy(policy)}
                >
                  Select Policy
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PolicyResultsViewer
