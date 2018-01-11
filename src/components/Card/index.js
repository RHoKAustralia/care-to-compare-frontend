import React from 'react'

import styles from './styles.css'

const Card = ({ children }) => <div className={styles.card}>{children}</div>

export const Header = ({ children }) => (
  <div className={styles.header}>{children}</div>
)
export const Content = ({ children }) => (
  <div className={styles.content}>{children}</div>
)

export default Card
