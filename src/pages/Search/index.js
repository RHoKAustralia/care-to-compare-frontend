import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { CardPanel, Icon } from 'react-materialize'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import { teal500 } from 'material-ui/styles/colors'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Slider from 'material-ui/Slider'

import Container from 'components/Container'
import PolicySearchForm from './PolicySearchForm'
import './styles.css'
import { fetchPolicies } from 'actions'

const muiTheme = getMuiTheme({
  palette: {
    textColor: teal500,
  },
})

class Search extends Component {
  state = {
    secondSlider: 300,
  }

  handleSecondSlider = (event, value) => {
    this.setState({ secondSlider: value })
  }

  submit = values => {
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

const mapStateToProps = (state, ownProps) => (state)
const mapDispatchToProps = ({
  onSearch: fetchPolicies,
})

export default connect(
  mapStateToProps,
  {
    onSearch: fetchPolicies,
  },
)(Search)
