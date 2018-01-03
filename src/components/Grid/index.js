import React from 'react'
import styles from './styles.css'

const Grid = ({ children }) => <div className={styles.grid}>{children}</div>

export const Col = ({ children, s }) => (
  <div className={styles[`s${s}`]}>{children}</div>
)

export default Grid
