import React from 'react'
import { Panel } from 'react-bootstrap'

const getWhoIsCoveredText = (categoryOfCover) => {
  if (categoryOfCover === 'FAMILIES') return 'Families'
  if (categoryOfCover === 'COUPLES') return 'Couples'
  if (categoryOfCover === 'SINGLES') return 'Individuals'

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
      <span
        style={{
          marginLeft: '10px',
        }}
      >
        {text}
      </span>
    </p>
  )
}

const Compact = ({ searchCriteria, onEditSearch }) => {
  return (
    <div
      className="clearfix"
      style={{
        fontSize: '16px',
      }}
    >
      <div
        className="pull-left"
        style={{
          marginLeft: '15px',
        }}
      >
        YOUR SUMMARY:
      </div>
      <div
        className="pull-left"
        style={{
          marginLeft: '25px',
        }}
      >
        <SummaryItem
          icon="fa-user"
          text={'For ' + getWhoIsCoveredText(searchCriteria.categoryOfCover)}
        />
      </div>
      <div
        className="pull-left"
        style={{
          marginLeft: '25px',
        }}
      >
        <SummaryItem
          icon="fa-question-circle"
          text={getPolicyTypeText(searchCriteria.policyType)}
        />
      </div>
      <div
        className="pull-left"
        style={{
          marginLeft: '25px',
        }}
      >
        <SummaryItem
          icon="fa-map-signs"
          text={searchCriteria.stateOfResidence}
        />
      </div>
      <div className="pull-left">
        <a
          style={{
            marginLeft: '25px',
          }}
          href=""
          onClick={(event) => {
            event.preventDefault()
            onEditSearch()
          }}
        >
          Edit...
        </a>
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

  return (
    <div>
      <Panel>
        <Panel.Heading>YOUR SUMMARY</Panel.Heading>
        <Panel.Body>
          <div className="clearfix">
            <div className="pull-right">
              <a
                style={{
                  fontSize: '16px',
                }}
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

          <div
            style={{
              fontSize: '16px',
            }}
          >
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
        </Panel.Body>
      </Panel>
    </div>
  )
}

export default SearchSummary
