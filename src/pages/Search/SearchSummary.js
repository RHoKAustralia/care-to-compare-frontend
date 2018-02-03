import React from 'react'

import Card, { Header, Content } from 'components/Card'

import styles from './styles.css'

const getWhoIsCoveredText = (categoryOfCover) => {
  if (categoryOfCover === 'FAMILIES') return 'Family'
  if (categoryOfCover === 'COUPLES') return 'Couple'
  if (categoryOfCover === 'SINGLES') return 'Individual'

  throw new Error(`Unkown categoryOfCover: ${categoryOfCover}`)
}

const getPolicyTypeText = (policyType) => {
  if (policyType === 'EXTRAS') return 'Extras'
  if (policyType === 'HOSPITAL') return 'Hospital'
  if (policyType === 'COMBINED') return 'Hospital & Extras'

  throw new Error(`Unkown policyType: ${policyType}`)
}

const SummaryItem = ({ icon, text }) => {
  return (
    <p>
      <i className={`fa ${icon} fa-lg`} />
      <span>{text}</span>
    </p>
  )
}

const Compact = ({ searchCriteria, onEditSearch }) => {
  return (
    <Card>
      <Content>
        <div className={styles.searchSummaryCompactContainer}>
          <div>YOUR SUMMARY:</div>
          <div>
            <SummaryItem
              icon="fa-user"
              text={
                'For ' + getWhoIsCoveredText(searchCriteria.categoryOfCover)
              }
            />
          </div>
          <div>
            <SummaryItem
              icon="fa-question-circle"
              text={getPolicyTypeText(searchCriteria.policyType)}
            />
          </div>
          <div>
            <SummaryItem
              icon="fa-map-signs"
              text={searchCriteria.stateOfResidence}
            />
          </div>
          <div className={styles.searchSummaryEditLinkContainer}>
            <a
              href=""
              onClick={(event) => {
                event.preventDefault()
                onEditSearch()
              }}
            >
              Edit
            </a>
          </div>
        </div>
      </Content>
    </Card>
  )
}

const SearchSummary = ({ searchCriteria, onEditSearch, compact }) => {
  if (compact) {
    return (
      <Compact searchCriteria={searchCriteria} onEditSearch={onEditSearch} />
    )
  }

  return (
    <div className={styles.searchSummaryContainer}>
      <Card>
        <Header>
          <div>YOUR SUMMARY</div>
        </Header>
        <Content>
          <div className={styles.searchSummaryEditLinkContainer}>
            <a
              href=""
              onClick={(event) => {
                event.preventDefault()
                onEditSearch()
              }}
            >
              Edit
            </a>
          </div>

          <div className={styles.searchSummaryItemsContainer}>
            <SummaryItem
              icon="fa-user"
              text={getWhoIsCoveredText(searchCriteria.categoryOfCover)}
            />
            <SummaryItem
              icon="fa-question-circle"
              text={getPolicyTypeText(searchCriteria.policyType)}
            />
            <SummaryItem
              icon="fa-map-signs"
              text={searchCriteria.stateOfResidence}
            />
          </div>
        </Content>
      </Card>
    </div>
  )
}

export default SearchSummary
