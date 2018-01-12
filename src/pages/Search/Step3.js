import React from 'react'
import { connect } from 'react-redux'
import { getFormValues } from 'redux-form'

import { formName } from './constants'

let Step3 = (props) => {
  const { handleSubmit, onPrevious, searchCriteria } = props
  console.log(searchCriteria)

  return (
    <form onSubmit={handleSubmit}>
      <h2>Search Results (Placeholder for search results)</h2>

      <div>
        <h4>Search Summary</h4>
        <p>TBA from searchCriteria</p>
        <p>TBA from searchCriteria</p>
        <p>TBA from searchCriteria</p>
      </div>

      <button type="button" onClick={onPrevious}>
        Update Search
      </button>
      <button type="submit">Search</button>
    </form>
  )
}

Step3 = connect((state) => ({
  searchCriteria: getFormValues(formName)(state),
}))(Step3)

export default Step3
