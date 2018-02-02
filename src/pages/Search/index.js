import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { reset } from 'redux-form'

import Container from 'components/Container'
import ProgressStepper from 'components/ProgressStepper'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

import styles from './styles.css'
// import { saveSearchCriteria } from 'actions'
// import { formName } from './constants'

const allSteps = [
  { step: 1, title: '1. Search' },
  { step: 2, title: '2. Refine' },
  { step: 3, title: '3. Compare' },
  { step: 4, title: '4. Confirm' },
]

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      selectedPolicy: null,
    }
  }

  toPage = (toPage) => {
    this.setState({ page: toPage })
  }

  nextPage = () => {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage = () => {
    this.setState({ page: this.state.page - 1 })
  }

  selectPolicy = (policy) => {
    this.setState({ selectedPolicy: policy })
    this.nextPage()
  }

  submit = (values) => {
    //const { history } = this.props

    console.log('Submitting polcy buy:', values)

    // We don't need to duplicate the search criteria to another part of state.
    // We can use getFormValues to get form values.
    // See https://redux-form.com/7.2.0/docs/api/selectors.md/
    // onSearch(values)

    //history.push('/') // TODO: goto results page
  }

  render() {
    const { page, selectedPolicy } = this.state

    return (
      <div>
        <div className={styles.header}>
          <Container>
            <ProgressStepper allSteps={allSteps} currentStep={page} />
          </Container>
        </div>

        <div className={styles.banner}>
          <Container>
            <strong>Let's get to know one another!</strong>
            <br />
            Your on your way to getting the right health insrance for you and
            supporting great charities when you choose &nbsp;
            <strong>Care to Compare</strong>.
          </Container>
        </div>

        <Container>
          <div className={styles.searchStepContainer}>
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
              <Step4
                onSubmit={this.submit}
                onPrevious={this.previousPage}
                onEditSearch={() => this.toPage(2)}
                selectedPolicy={selectedPolicy}
              />
            )}
          </div>
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
