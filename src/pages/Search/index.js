import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { reset } from 'redux-form'

import Container from 'components/Container'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

// import styles from './styles.css'
// import { saveSearchCriteria } from 'actions'
// import { formName } from './constants'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
    }
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 })
  }

  selectPolicy = (policy) => {
    // TODO: set policy details into redux state
    console.log('Selected policy:', policy)
    this.nextPage()
  }

  submit = (values) => {
    //const { history } = this.props

    console.log('Submitting Search:', values)

    // We don't need to duplicate the search criteria to another part of state.
    // We can use getFormValues to get form values.
    // See https://redux-form.com/7.2.0/docs/api/selectors.md/
    // onSearch(values)

    //history.push('/') // TODO: goto results page
  }

  render() {
    const { page } = this.state

    return (
      <div>
        <Container>
          {page === 1 && <Step1 onSubmit={this.nextPage} />}
          {page === 2 && (
            <Step2 onSubmit={this.nextPage} onPrevious={this.previousPage} />
          )}
          {page === 3 && (
            <Step3
              onSubmit={this.selectPolicy}
              onPrevious={this.previousPage}
            />
          )}
          {page === 4 && (
            <Step4 onSubmit={this.submit} onPrevious={this.previousPage} />
          )}
        </Container>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => state

const mapDispatchToProps = (dispatch) => ({
  // onSearch: (searchCriteria) => dispatch(saveSearchCriteria(searchCriteria)),
  // onDone: () => {
  //   dispatch(clearSearchCriteria())
  //   // dispatch(reset(formName)) // TODO: example left here when we need to reset the form
  // }
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
