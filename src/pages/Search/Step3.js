import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import lodash from 'lodash'
import { Row, Col, Panel, Button, Well, Image } from 'react-bootstrap'

import { searchFormName } from './constants'
import AsyncLoader from 'components/AsyncLoader'
import styles from './styles.css'

const dummyThumbnail = require('../../assets/dummy_thumbnail.png')

const pageSize = 3

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

    return (
      <AsyncLoader loading={loading} error={error}>
        <Row>
          <Col xsHidden smHidden md={3}>
            <div>
              <Panel>
                <Panel.Heading>YOUR SUMMARY</Panel.Heading>
                <Panel.Body>
                  YOUR SUMMARY: TBA ...<br />
                  <Button type="button" onClick={onPrevious}>
                    Edit
                  </Button>
                </Panel.Body>
              </Panel>
            </div>
          </Col>
          <Col mdHidden lgHidden xs={12} sm={12}>
            <Well>
              YOUR SUMMARY: TBA ...<br />{' '}
              <Button type="button" onClick={onPrevious}>
                Edit
              </Button>
            </Well>
          </Col>
          <Col xs={12} sm={12} md={9}>
            <Row>
              <Col xs={12}>
                {meta.page > 1 ? (
                  <div
                    className={[
                      styles.prevPageButton,
                      styles.resultNavButton,
                    ].join(' ')}
                    onClick={this.handlePrevious}
                  >
                    <i className="fas fa-chevron-circle-left fa-3x" />
                  </div>
                ) : (
                  <span />
                )}
                {meta.page < meta.totalPages ? (
                  <div
                    className={[
                      styles.nextPageButton,
                      styles.resultNavButton,
                    ].join(' ')}
                    onClick={this.handleNext}
                  >
                    <i className="fas fa-chevron-circle-right fa-3x" />
                  </div>
                ) : (
                  <span />
                )}
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
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
                          <div style={{ fontSize: '24px' }}>
                            ${policy.monthlyPremium}
                          </div>
                          <strong>&#47;month</strong>
                        </div>
                        <div style={{ marginTop: '20px' }}>
                          <a>View SIS</a>
                        </div>
                        <div className={styles.selectFundBtnContainer}>
                          <Button
                            block
                            bsStyle="success"
                            onClick={(event) => onSubmit(policy)}
                          >
                            Select Policy
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </AsyncLoader>
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
