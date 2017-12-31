import React from 'react'
import './styles.css'

const Grid = ({ children }) => <div className="grid">{children}</div>

export const Col = ({ children, s }) => (
  <div className={`s${s}`}>{children}</div>
)

export default Grid
