import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './styles.css'

const seperatorElement = 'SEPARATOR'

const joinSeperator = (steps) => {
  return steps.reduce((acc, currVal, index) => {
    // first element
    if (index === 0) {
      return acc.concat(currVal).concat(seperatorElement)
    }

    // last element
    if (index === steps.length - 1) {
      return acc.concat(seperatorElement).concat(currVal)
    }

    // if we have a seperator at the head of the accumulator we add a step
    if (acc[acc.length - 1] === seperatorElement) {
      return acc.concat(currVal)
    }

    // else we add a separator
    return acc.concat(seperatorElement).concat(currVal)
  }, [])
}

const getStepElement = (wizardStep, index, currentStep) => {
  if (wizardStep === seperatorElement) {
    return (
      <div key={`connector_${index}`} className={styles.stepConnector}>
        <hr />
      </div>
    )
  }

  return (
    <div key={wizardStep.step} className={styles.step}>
      <div className={styles.stepItems}>
        <div
          className={classnames(styles.stepMaker, styles.stepItem, {
            [styles.hollow]: currentStep < wizardStep.step,
            [styles.solid]: currentStep >= wizardStep.step,
          })}
        />
        <div className={[styles.stepItem, styles.stepText].join(' ')}>
          {wizardStep.title}
        </div>
      </div>
    </div>
  )
}

class ProgressStepper extends Component {
  render() {
    const { allSteps, currentStep } = this.props
    const steps = joinSeperator(allSteps)

    return (
      <div>
        <div className={styles.stepperContainer}>
          {steps.map((step, index) => getStepElement(step, index, currentStep))}
        </div>
      </div>
    )
  }
}

ProgressStepper.propTypes = {
  allSteps: PropTypes.arrayOf(
    PropTypes.shape({
      step: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
  currentStep: PropTypes.number.isRequired,
}

export default ProgressStepper
