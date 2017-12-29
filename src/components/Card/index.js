import React from 'react'

import './styles.css'

const Card = ({ children }) => <div className="card">{children}</div>

export const CardHeader = ({ children }) => (
  <div className="heading">{children}</div>
)
export const CardContent = ({ children }) => (
  <div className="content">{children}</div>
)

export default Card
