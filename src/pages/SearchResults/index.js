import React, { Component } from 'react'
import { Icon } from 'react-materialize'
import { connect } from 'react-redux'

import CharityBanner from 'components/CharityBanner'
import PolicyStub from 'components/PolicyStub'
import Container from 'components/Container'
import Card, { CardHeader, CardContent } from 'components/Card'
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
          {this.props.policySearch.loading ? (
            <div className="preloader-wrapper big active">
              <div className="spinner-layer spinner-blue-only">
                <div className="circle-clipper left">
                  <div className="circle" />
                </div>
                <div className="gap-patch">
                  <div className="circle" />
                </div>
                <div className="circle-clipper right">
                  <div className="circle" />
                </div>
              </div>
            </div>
          ) : (
            <Container>
              <div className="summary">
                <Card>
                  <CardHeader>
                    <h3 className="top">Summary</h3>
                  </CardHeader>
                  <CardContent>
                    <ul>
                      <li>
                        <Icon>person</Icon>
                        <span>Individual</span>
                      </li>
                      <li>
                        <Icon>add_location</Icon> Location
                      </li>
                      <li>
                        <Icon>local_hospital</Icon> Hospital mid level & extras
                        top level
                      </li>
                      <li> ${} excess</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="results row">
                {this.props.policySearch.searchResults
                  .slice(0, 3)
                  .map((policy) => (
                    <PolicyStub key={policy.sisCode} policy={policy} />
                  ))}
                {this.props.policySearch.searchResults.length === 0 && (
                  <Card>
                    <CardContent>No results found.</CardContent>
                  </Card>
                )}
              </div>
            </Container>
          )}
        </div>

        <CharityBanner />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => state
const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults)
