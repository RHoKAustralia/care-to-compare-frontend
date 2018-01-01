import React, { Component } from 'react'
import { connect } from 'react-redux'

import CharityBanner from 'components/CharityBanner'
import PolicyStub from 'components/PolicyStub'
import Container from 'components/Container'
import Card, { CardHeader, CardContent } from 'components/Card'
import Grid, { Col } from 'components/Grid'
import { IconMapMarker, IconMedkit, IconUser } from 'components/Icons'
import LoadingSpinner from 'components/LoadingSpinner'
import './styles.css'

class SearchResults extends Component {
  render() {
    return (
      <div className="search-results">
        <div className="flash">
          <Container>
            <h5>Thanks for caring to compare</h5>
            <p>Here's the top 3 policies we found</p>
          </Container>
        </div>

        <div className="search-results-wrapper">
          <LoadingSpinner loading={this.props.policySearch.loading} />
          <Container>
            <div className="summary">
              <Card>
                <CardHeader>
                  <h3 className="top">Summary</h3>
                </CardHeader>
                <CardContent>
                  <ul>
                    <li>
                      <IconUser />
                      <span>Individual</span>
                    </li>
                    <li>
                      <IconMapMarker /> Location
                    </li>
                    <li>
                      <IconMedkit /> Hospital mid level & extras top level
                    </li>
                    <li> ${} excess</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Grid>
              {this.props.policySearch.searchResults
                .slice(0, 3)
                .map((policy) => (
                  <Col s={4}>
                    <PolicyStub key={policy.sisCode} policy={policy} />
                  </Col>
                ))}
              {this.props.policySearch.searchResults.length === 0 && (
                <Col s={12}>
                  <Card>
                    <CardContent>No results found.</CardContent>
                  </Card>
                </Col>
              )}
            </Grid>
          </Container>
        </div>

        <CharityBanner />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => state
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
