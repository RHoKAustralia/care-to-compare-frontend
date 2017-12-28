import React from 'react'
import { Link } from 'react-router-dom'

import { IconMapMarker, IconMedkit, IconUser } from 'components/Icons'

const UserSummary = (props) => (
  <div>
    <h3>Your summary</h3>
    <Link to="/results">Edit</Link>
    <ul>
      <li>
        <IconUser /> Individual
      </li>
      <li>
        <IconMapMarker /> Victoria
      </li>
      <li>
        <IconMedkit />
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
