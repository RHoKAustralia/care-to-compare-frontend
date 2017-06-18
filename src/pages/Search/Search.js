import React, { Component } from 'react';
import { Button, Icon, Input, Row, Col } from 'react-materialize'
import { Link } from 'react-router-dom';

var dummy = require('../../assets/dummy.jpg')

class Search extends Component {
  render() {
    return (
      <div>
        <div className="row" style={{marginTop: 100}}>    
          <div className="col offset-s4">
            <div className="switch">
              <h5 className="left-align">
                Existing Cover?
              </h5>
              <div>
                <label>
                  No
                  <input type="checkbox" />
                  <span className="lever"></span>
                  Yes
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col offset-s4">
            <h5 className="left-align">
              Type of Cover
            </h5>
            <div>
              <img src={dummy} className="circle" style={{width: 50}} />
              <img src={dummy} className="circle" style={{width: 50}} />
              <img src={dummy} className="circle" style={{width: 50}} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col offset-s4">
            <h5 className="left-align">
                Your Age
            </h5>
            <div>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col offset-s4">
            <h5 className="left-align">
                Your Location
            </h5>
            <div>
              <input type="text" />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col offset-s4">
            <h5 className="left-align">
                Cover Options
            </h5>
            <div className="row">
              <div className="col s4">
                <div className="card-panel grey lighten-5 z-depth-1">
                  Hospital
                </div>
              </div>
              <div className="col s4">
                <div className="card-panel grey lighten-5 z-depth-1">
                  Extras
                </div>
              </div>
              <div className="col s4">
                <div className="card-panel grey lighten-5 z-depth-1">
                  Combined
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col offset-s4">
            <h5>
                Excess
            </h5>
            <div>
              <p className="range-field">
                <input type="range" id="test5" min="0" max="2000" style={{width: 400}} />
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col offset-s4">
            <a className="btn waves-effect waves-light">
              <Link to='/results'>Let's Compare</Link>
              <i className="material-icons right">send</i>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
