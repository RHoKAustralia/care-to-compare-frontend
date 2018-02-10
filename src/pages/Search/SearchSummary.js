import React from 'react'

import CheckList from 'components/CheckList'
import Card, { Header, Content } from 'components/Card'

import { extrasInclusionsOptions, hospitalInclusionsOptions } from './constants'
import { getInclusionLabelByValue } from './PolicyResultsViewer'
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

const InclusionSummary = ({ title, inclusionList }) => {
  if (!inclusionList || inclusionList.length === 0) {
    return <span />
  }

  return (
    <div>
      <div className="h5">{title}</div>
      <div>
        <CheckList items={inclusionList} itemSpacing="normal" />
      </div>
    </div>
  )
}

const SearchSummary = ({ searchCriteria, onEditSearch, compact }) => {
  if (compact) {
    return (
      <Compact searchCriteria={searchCriteria} onEditSearch={onEditSearch} />
    )
  }

  const {
    categoryOfCover,
    policyType,
    stateOfResidence,
    extrasInclusions,
    hospitalInclusions,
  } = searchCriteria

  const hospitalInclusionsList = hospitalInclusions
    ? hospitalInclusions.map((inclusion) => ({
        checked: true,
        label: getInclusionLabelByValue(hospitalInclusionsOptions, inclusion),
      }))
    : []

  const extrasInclusionsList = extrasInclusions
    ? extrasInclusions.map((inclusion) => ({
        checked: true,
        label: getInclusionLabelByValue(extrasInclusionsOptions, inclusion),
      }))
    : []

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
              text={getWhoIsCoveredText(categoryOfCover)}
            />
            <SummaryItem
              icon="fa-question-circle"
              text={getPolicyTypeText(policyType)}
            />
            <SummaryItem icon="fa-map-signs" text={stateOfResidence} />

            <InclusionSummary
              title="Hospital Inclusions"
              inclusionList={hospitalInclusionsList}
            />
            <InclusionSummary
              title="Extras Inclusions"
              inclusionList={extrasInclusionsList}
            />
          </div>
        </Content>
      </Card>
    </div>
  )
}

export default SearchSummary
