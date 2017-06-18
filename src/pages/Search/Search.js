import React, { Component } from 'react';
import {Button, Icon} from 'react-materialize'


class Search extends Component {
  render() {
    return (
      <div>
        <h1>Exisitig Policy?</h1>
        <div>
          <Button waves='light'>Yes<Icon left>save</Icon></Button>
        </div>
      </div>
    );
  }
}

export default Search;
