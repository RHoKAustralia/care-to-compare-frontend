import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import lodash from 'lodash'
import { Row, Col, Panel, Button } from 'react-bootstrap'

import { searchFormName } from './constants'
import AsyncLoader from 'components/AsyncLoader'
import PolicyResultsViewer from './PolicyResultsViewer'
import { IconUp, IconDown } from 'components/Icons'
import styles from './styles.css'

const pageSize = 3

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

class Step3 extends Component {
  state = { page: 1, expandDetails: false }

  toggleDetails = () => {
    this.setState(({ expandDetails }) => ({ expandDetails: !expandDetails }))
  }

  handleNext = () => {
    const nextPage = this.state.page + 1

    this.props.loadPage(nextPage).then(() => {
      this.setState(({ page }) => ({ page: nextPage }))
    })
  }

  handlePrevious = () => {
    const prevPage = this.state.page - 1

    this.props.loadPage(prevPage).then(() => {
      this.setState(({ page }) => ({ page: prevPage }))
    })
  }

  render() {
    const {
      onSubmit,
      onPrevious,
      searchCriteria,
      loading,
      error,
      policies,
      meta,
    } = this.props

    return (
      <div
        style={{
          minHeight: '300px',
        }}
      >
        <AsyncLoader loading={loading} error={error}>
          <Row>
            <Col xsHidden smHidden md={3}>
              <div>
                <Panel>
                  <Panel.Heading>YOUR SUMMARY</Panel.Heading>
                  <Panel.Body>
                    <Row>
                      <Col md={12}>
                        <div className="pull-right">
                          <a
                            style={{
                              fontSize: '16px',
                            }}
                            href=""
                            onClick={(event) => {
                              event.preventDefault()
                              onPrevious()
                            }}
                          >
                            Edit
                          </a>
                        </div>
                      </Col>
                    </Row>

                    <div
                      style={{
                        fontSize: '16px',
                      }}
                    >
                      <p>
                        <i className="fas fa-user" />
                        <span
                          style={{
                            marginLeft: '10px',
                          }}
                        >
                          Cover for{' '}
                          <strong>
                            {getWhoIsCoveredText(
                              searchCriteria.categoryOfCover,
                            )}
                          </strong>
                        </span>
                      </p>
                      <p>
                        <i className="fas fa-question-circle" />
                        <span
                          style={{
                            marginLeft: '10px',
                          }}
                        >
                          With{' '}
                          <strong>
                            {getPolicyTypeText(searchCriteria.policyType)}
                          </strong>
                        </span>
                      </p>
                      <p>
                        <i className="fas fa-map-marker-alt" />
                        <span
                          style={{
                            marginLeft: '10px',
                          }}
                        >
                          In <strong>{searchCriteria.stateOfResidence}</strong>
                        </span>
                      </p>
                    </div>
                  </Panel.Body>
                </Panel>
              </div>
            </Col>
            <Col mdHidden lgHidden xs={12} sm={12}>
              YOUR SUMMARY: TBA ...<br />{' '}
              <Button type="button" onClick={onPrevious}>
                Edit
              </Button>
            </Col>
            <Col xs={12} sm={12} md={9}>
              <PolicyResultsViewer
                pagingMeta={meta}
                policies={policies}
                prevPage={this.handlePrevious}
                nextPage={this.handleNext}
                selectPolicy={onSubmit}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} mdOffset={3} md={9}>
              <div className={styles.moreDetailsContainer}>
                <Button block onClick={() => this.toggleDetails()}>
                  <span
                    style={{
                      marginRight: '30px',
                      fontSize: '16px',
                    }}
                  >
                    {this.state.expandDetails ? 'Less' : 'More'} details
                  </span>
                </Button>
              </div>
            </Col>
          </Row>
        </AsyncLoader>
      </div>
    )
  }
}

const POLICIES_QUERY = gql`
  query(
    $policyType: PolicyType!
    $categoryOfCover: CategoryOfCover!
    $stateOfResidence: AustralianStates!
    $page: Int!
    $hospitalInclusions: [HospitalInclusions]
    $extrasInclusions: [ExtrasInclusions]
  ) {
    search(
      policyType: $policyType
      categoryOfCover: $categoryOfCover
      state: $stateOfResidence
      hospitalInclusions: $hospitalInclusions
      extrasInclusions: $extrasInclusions
      page: $page
      pageSize: ${pageSize}
    ) {
      policies {
        id
        fundName
        policyName
        monthlyPremium
      }
      meta {
        page
        pageSize
        totalPages
        totalRecords
      }
    }
  }
`

const mapPropsToOptions = (props) => {
  const { searchCriteria } = props
  return {
    notifyOnNetworkStatusChange: true,
    variables: {
      policyType: searchCriteria.policyType,
      categoryOfCover: searchCriteria.categoryOfCover,
      stateOfResidence: searchCriteria.stateOfResidence,
      hospitalInclusions: searchCriteria.hospitalInclusions
        ? searchCriteria.hospitalInclusions
        : [],
      extrasInclusions: searchCriteria.extrasInclusions
        ? searchCriteria.extrasInclusions
        : [],
      page: 1,
    },
  }
}

const mapResultsToProps = ({ data }) => {
  return {
    // https://github.com/apollographql/react-apollo/issues/1385
    loading: data.loading,
    error: data.error,
    policies: data.search ? data.search.policies : [],
    meta: data.search ? data.search.meta : {},
    loadPage: (page) =>
      data.fetchMore({
        variables: { page },
        updateQuery: (previousResult, { fetchMoreResult }) =>
          lodash.merge({}, previousResult, fetchMoreResult),
      }),
  }
}

Step3 = graphql(POLICIES_QUERY, {
  props: mapResultsToProps,
  options: mapPropsToOptions,
})(Step3)

Step3 = connect((state) => ({
  searchCriteria: getFormValues(searchFormName)(state),
}))(Step3)

export default Step3
