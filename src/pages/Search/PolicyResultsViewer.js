import React from 'react'
import { Button, Image } from 'react-bootstrap'

import styles from './styles.css'
const dummyThumbnail = require('../../assets/dummy_thumbnail.png')

const PolicyResultsViewer = ({
  pagingMeta,
  policies,
  prevPage,
  nextPage,
  selectPolicy,
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
            <i className="fas fa-chevron-circle-left fa-4x" />
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
            <i className="fas fa-chevron-circle-right fa-4x" />
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
              <div style={{ height: '100px' }}>
                <strong>{policy.policyName}</strong>
              </div>
              <div>
                <div style={{ fontSize: '24px' }}>${policy.monthlyPremium}</div>
                <strong>&#47;month</strong>
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
