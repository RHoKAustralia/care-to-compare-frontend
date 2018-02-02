import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import lodash from 'lodash'
import { Row, Col, Button } from 'react-bootstrap'

import { searchFormName } from './constants'
import AsyncLoader from 'components/AsyncLoader'
import PolicyResultsViewer from './PolicyResultsViewer'
import { IconUp, IconDown } from 'components/Icons'
import SearchSummary from './SearchSummary'

import styles from './styles.css'

const pageSize = 3

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

    const { expandDetails } = this.state

    return (
      <div
        style={{
          minHeight: '300px',
        }}
      >
        <AsyncLoader loading={loading} error={error}>
          <Row>
            <Col xsHidden smHidden md={3}>
              <SearchSummary
                searchCriteria={searchCriteria}
                onEditSearch={onPrevious}
              />
            </Col>
            <Col mdHidden lgHidden xs={12} sm={12}>
              <SearchSummary
                searchCriteria={searchCriteria}
                onEditSearch={onPrevious}
                compact={true}
              />
            </Col>
            <Col xs={12} sm={12} md={9}>
              <PolicyResultsViewer
                pagingMeta={meta}
                policyType={searchCriteria.policyType}
                policies={policies}
                prevPage={this.handlePrevious}
                nextPage={this.handleNext}
                selectPolicy={onSubmit}
                showPolicyDetails={expandDetails}
              />
            </Col>
          </Row>
          <Row>
            <Col xs={12} sm={12} mdOffset={3} md={9}>
              <div className={styles.moreDetailsContainer}>
                <Button
                  block
                  onClick={() => this.toggleDetails()}
                  active={expandDetails}
                >
                  <span
                    style={{
                      marginRight: '30px',
                      fontSize: '16px',
                    }}
                  >
                    {expandDetails ? 'Less' : 'More'} details
                  </span>
                  {expandDetails ? <IconUp /> : <IconDown />}
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
        sisCode
        fundName
        policyName
        policyType
        monthlyPremium
        ambulanceCover
        extrasComponent {
          inclusions {
            category
            covered
          }
          preferredProvider
        }
        hospitalComponent {
          inclusions {
            category
            covered
          }
        }
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
        updateQuery: (previousResult, { fetchMoreResult }) => fetchMoreResult,
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
