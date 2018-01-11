import React from 'react'
import { Link } from 'react-router-dom'

import Card, { Header, Content } from 'components/Card'
import { IconMapMarker, IconMedkit, IconUser } from 'components/Icons'

const UserSummary = (props) => (
  <Card>
    <Header>Your summary</Header>
    <Content>
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
    </Content>
  </Card>
)

export default UserSummary
