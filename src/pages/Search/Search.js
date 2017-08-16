import React, { Component } from 'react';
import { CardPanel } from 'react-materialize';
import Slider from 'material-ui/Slider';
import './Search.css';




class Search extends Component {

  state = {
    secondSlider: 300
  };


  render() {
    return (
      <CardPanel>
        <p>Do you currently have a policy?</p>
        <p>Enter your policy details so we can help you find a better one.</p>
        <div className="row">
          <div className="col offset-l1 offset-m1">
            <div className="col s12 m5 l4 policyItem">
              <input id="first_name" type="text" className="validate"/>
              <label htmlFor="first_name">Policy Number</label>
            </div>
            <div className="col s12 m2 l2 policyItem">
              <input id="last_name" type="text" className="validate"/>
              <label htmlFor="last_name">Age</label>
            </div>
            <div className="col s12 m5 l6 policyItem">
              <input id="last_name" type="text" className="validate"/>
              <label htmlFor="last_name">Location</label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row">
            <div className="col s4">
              <div className="card-panel grey lighten-4 z-depth-1">
                Individual
              </div>
            </div>
            <div className="col s4">
              <div className="card-panel grey lighten-4 z-depth-1">
                Couple
              </div>
            </div>
            <div className="col s4">
              <div className="card-panel grey lighten-4 z-depth-1">
                Family
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="row offset-l1">
            <div className="row">
              <div className="col s4">
                <div className="card-panel grey lighten-4 z-depth-1">
                  Hospital
                </div>
              </div>
              <div className="col s4">
                <div className="card-panel grey lighten-4 z-depth-1">
                  Extras
                </div>
              </div>
              <div className="col s4">
                <div className="card-panel grey lighten-4 z-depth-1">
                  Combined
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardPanel>
    );
  }
}

export default Search;
