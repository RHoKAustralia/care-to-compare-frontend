import React, { Component } from 'react'
import { connect } from 'react-redux'

import Container from 'components/Container'

import PolicySearchForm from './PolicySearchForm'

import styles from './styles.css'
import { fetchPolicies } from 'actions'

class Search extends Component {
  state = {
    secondSlider: 300,
  }

  handleSecondSlider = (event, value) => {
    this.setState({ secondSlider: value })
  }

  submit = (values) => {
    this.props.onSearch(values)
  }

  render() {
    return (
      <div>
        <Container>
          <PolicySearchForm onSubmit={this.submit} />
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => state
const mapDispatchToProps = {
  onSearch: fetchPolicies,
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)
