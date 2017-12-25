import React from 'react'
import { Link } from 'react-router-dom'

const UserSummary = (props) => (
  <div>
    <h3>Your summary</h3>
    <Link to="/results">Edit</Link>
    <ul>
      <li>
        <i className="fa fa-user" /> Individual
      </li>
      <li>
        <i className="fa fa-map-marker" /> Victoria
      </li>
      <li>
        <i className="fa fa-medkit" />
        <ul>
          <li>hospital mid level & extras top level</li>
          <li>$250 excess</li>
          <li>Monthly payment</li>
        </ul>
      </li>
    </ul>
  </div>
)

export default UserSummary
