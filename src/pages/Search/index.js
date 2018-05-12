import React, { Component } from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'

import Container from 'components/Container'
import ProgressStepper from 'components/ProgressStepper'
import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'
import Step4 from './Step4'

import styles from './styles.css'
import { purchasedPolicy } from 'actions'
import { searchFormName, signupFormName } from './constants'

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

  enterUserAndPaymentDetails = (values) => {
    const { history, clearSearchForms, onPurchasedPolicy } = this.props
    const { selectedPolicy } = this.state
    const userDetails = {
      name: values.firstName + ' ' + values.lastName,
    }

    // TODO: submit details to somewhere??? How? Use exisitng GraphQL API with mutations? How to handle errors???

    // Then, set the details into redux state to be used in the thanks page
    onPurchasedPolicy(selectedPolicy, userDetails)

    clearSearchForms()
    history.push('/thanks')
  }

  render() {
    const { page, selectedPolicy } = this.state

    return (
      <div>
        <div className={styles.header}>
          <Container>
            <div className={styles.stepperContainer}>
              <ProgressStepper allSteps={allSteps} currentStep={page} />
            </div>
          </Container>
        </div>

        <div className={styles.banner}>
          <Container>
            <strong>Let's get to know one another!</strong>
            <br />
            You're on your way to getting the right health insurance for you and
            supporting great charities when you compare and buy health insurance
            with&nbsp;
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
                onSubmit={this.enterUserAndPaymentDetails}
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
  onPurchasedPolicy: (policy, userDetails) =>
    dispatch(purchasedPolicy(policy, userDetails)),
  clearSearchForms: () => {
    dispatch(reset(searchFormName))
    dispatch(reset(signupFormName))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
