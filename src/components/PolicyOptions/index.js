import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { CardPanel, Icon } from 'react-materialize'

import Button from 'components/Button'
import './styles.css'

/*
 Policy Options is a container component of a list of categories.
 The user is able to select a Category component which adds to a list of categories.

*/

function Category (props) {
  const category = props.name;
  return (
    <div className="col s4" onClick={(e)=>props.selected(e,category)} >
          <div className="card-panel grey lighten-4 z-depth-1 policyOption">
          <Icon left>accessibility</Icon>
          { category }
          </div>
    </div>

  );
}


class PolicyOptions extends Component {

  constructor(props) {
    super(props);
    this.state = { selectedCategories: [] }

    this.categoryChange = this.categoryChange.bind(this);
  }

  categoryChange(e,category) {
    e.preventDefault();
    var selectedCategories = this.state.selectedCategories;
    if(selectedCategories.keys(category)) {
      selectedCategories.pop(category);   
    } else {
      selectedCategories.push(category);   
    } 
    this.setState({ selectedCategories: selectedCategories});

   // this.setState({ value: category });
  }

 
  render() {
    const categories = ['Individual','Couple','Family','Hospital','Extras','Combined'];

    return (
      <div className="row">
        { categories.map((category) => <Category key={category} name={category} selected={this.categoryChange} />) }
        
     </div>
    
    )
  }
}

export default PolicyOptions;



