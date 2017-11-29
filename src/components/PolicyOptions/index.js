import React, { Component } from 'react'

import './styles.css'
const imageIcon = require('../../assets/policy-options/combined-unselected.png')

/*
 Policy Options is a container component of a list of categories.
 The user is able to select a Category component which adds to a list of categories.

*/

class Category extends Component {
  constructor(props) {
    super(props)
    this.state = { isOn: false }
    this.Selected = this.Selected.bind(this)
  }

  Selected(e) {
    this.setState({ isOn: !this.state.isOn })
    console.log(this.isOn)
    this.props.selected(e, this.props.name)
  }

  render() {
    var category = this.props.name
    return (
      <div className="col s4" onClick={e => this.Selected(e)}>
        <div
          className={
            ' policyOptions ' +
            (this.state.isOn ? 'policy-selected' : 'policy-unselected')
          }
        >
          <img src={imageIcon} alt={category} />
          <span> {category}</span>
        </div>
      </div>
    )
  }
}

class PolicyOptions extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedCategories: [] }

    this.categoryChange = this.categoryChange.bind(this)
  }

  categoryChange(e, category) {
    e.preventDefault()
    var selectedCategories = this.state.selectedCategories
    if (selectedCategories.keys(category)) {
      selectedCategories.pop(category)
    } else {
      selectedCategories.push(category)
    }
    this.setState({ selectedCategories: selectedCategories })

    // this.setState({ value: category });
  }

  render() {
    const categories = [
      'Individual',
      'Couple',
      'Family',
      'Hospital',
      'Extras',
      'Combined',
    ]

    return (
      <div className="row">
        {categories.map(category => (
          <Category
            key={category}
            name={category}
            selected={this.categoryChange}
          />
        ))}
      </div>
    )
  }
}

export default PolicyOptions
