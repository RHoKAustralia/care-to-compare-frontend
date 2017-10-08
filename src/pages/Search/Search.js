import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardPanel, Icon } from 'react-materialize';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {teal500} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Slider from 'material-ui/Slider';
import './Search.css';

const muiTheme = getMuiTheme({
  palette: {
    textColor: teal500
  }
});

class Search extends Component {

  state = {
    secondSlider: 300
  };

  handleSecondSlider = (event, value) => {
    this.setState({secondSlider: value});
  };

  render() {
    return (
      <div>
        <CardPanel>
          <p>
            Do you currently have a policy?
            <div className="switch">
            <label>
              No
              <input type="checkbox" />
              <span className="lever"></span>
              Yes
            </label>
          </div>
          </p>
          <p>Enter your policy details so we can help you find a better one.</p>
          <div className="row">
            <div className="col offset-l1 offset-m1">
              <div className="col s12 m5 l4 policyItem">
                <input id="policyNumber" type="text" className="validate"/>
                <label htmlFor="policyNumber">Policy Number</label>
              </div>
              <div className="col s12 m2 l2 policyItem">
                <input id="date-of-birth" type="date" className="datepicker validate"/>
                <label htmlFor="date-of-birth">Date of birth</label>
              </div>
              <div className="col s12 m5 l6 policyItem">
                <select id="location" className="browser-default">
                  <option value="ACT">ACT</option>
                  <option value="QLD">QLD</option>
                  <option value="NSW">NSW</option>
                  <option value="NT">NT</option>
                  <option value="SA">SA</option>
                  <option value="TAS">TAS</option>
                  <option value="VIC">VIC</option>
                  <option value="WA">WA</option>
                </select>
                <label htmlFor="location">Location</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row">
              <div className="col s4">
                <div className="card-panel grey lighten-4 z-depth-1 policyOption">
                  <Icon left>accessibility</Icon>
                  Individual
                </div>
              </div>
              <div className="col s4">
                <div className="card-panel grey lighten-4 z-depth-1 policyOption">
                  <Icon left>accessibility</Icon>
                  Couple
                </div>
              </div>
              <div className="col s4">
                <div className="card-panel grey lighten-4 z-depth-1 policyOption">
                  <Icon left>accessibility</Icon>
                  Family
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row offset-l1">
              <div className="row">
                <div className="col s4">
                  <div className="card-panel grey lighten-4 z-depth-1 policyOption">
                    Hospital
                  </div>
                </div>
                <div className="col s4">
                  <div className="card-panel grey lighten-4 z-depth-1 policyOption">
                    Extras
                  </div>
                </div>
                <div className="col s4">
                  <div className="card-panel grey lighten-4 z-depth-1 policyOption">
                    Combined
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p>Excess Options</p>
          <p>Choose your amount: <span className="excessAmount">$ {this.state.secondSlider}</span></p>
          <MuiThemeProvider muiTheme={muiTheme}>
            <Slider
              min={0}
              max={1000}
              step={10}
              value={this.state.secondSlider}
              onChange={this.handleSecondSlider}
            />
          </MuiThemeProvider>
        </CardPanel>
        <div className="row">
          <div className="col offset-s4 offset-l9 offset-m9">
            <Link to='/results' className='btn btn-large waves-effect waves-light darken-1'>
              Compare now
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
