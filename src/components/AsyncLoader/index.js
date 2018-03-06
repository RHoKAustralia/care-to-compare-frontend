import React from 'react'
import { RingLoader } from 'react-spinners'

import styles from './styles.css'

const AsyncLoader = ({ loading, error, children }) => {
  if (error) {
    console.error('An error occurred:', error)
    return (
      <div className={styles.errorContainer}>
        <div>An error occurred!</div>
      </div>
    )
  }

  return (
    <div>
      {loading ? (
        <div className={styles.loaderContainer}>
          <RingLoader color={'#3f3d3d'} loading={loading} />
        </div>
      ) : (
        children
      )}
    </div>
  )
}

export default AsyncLoader
