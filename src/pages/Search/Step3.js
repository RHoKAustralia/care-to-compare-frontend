import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import lodash from 'lodash'
import { ButtonToolbar, Button } from 'react-bootstrap'

import { searchFormName } from './constants'

class Step3 extends Component {
  state = { page: 1 }

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
      //searchCriteria,
      loading,
      error,
      policies,
      meta,
    } = this.props

    if (loading) {
      return <div>Loading...</div>
    }

    if (error) {
      return <div>{`Errors: ${error}`}</div>
    }

    return (
      <div>
        <h2>Select Policy (Step 3)</h2>
        <blockquote>
          {`Page ${meta.page} of ${meta.totalPages}`} (Total results:{' '}
          {meta.totalRecords})
        </blockquote>
        <div>
          {policies.map((policy) => (
            <div key={policy.id}>
              <span>
                {policy.policyName} - ${policy.monthlyPremium}
              </span>
              <button onClick={(event) => onSubmit(policy)}>
                Select Policy
              </button>
            </div>
          ))}
        </div>

        <div>
          <ButtonToolbar>
            {meta.page > 1 ? (
              <Button type="button" onClick={this.handlePrevious}>
                <i className="fas fa-chevron-left" />&nbsp;Previous Results
              </Button>
            ) : (
              <span />
            )}
            {meta.page < meta.totalPages ? (
              <Button type="button" onClick={this.handleNext}>
                Next Result&nbsp;<i className="fas fa-chevron-right" />
              </Button>
            ) : (
              <span />
            )}
          </ButtonToolbar>
        </div>

        <div className="pull-right">
          <ButtonToolbar>
            <Button
              bsStyle="info"
              bsSize="large"
              type="button"
              onClick={onPrevious}
            >
              <i className="fas fa-arrow-left" />&nbsp;Previous
            </Button>
            <Button bsStyle="primary" bsSize="large" type="button">
              Next&nbsp;<i className="fas fa-arrow-right" />
            </Button>
          </ButtonToolbar>
        </div>
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
      pageSize: 3
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
