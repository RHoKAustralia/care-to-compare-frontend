import React from 'react'
import styles from './styles.css'

const ImageRow = ({ images }) => (
  <div className={styles.row}>
    {images.map(function(imageUrl, index) {
      return (
        <img
          key={index}
          src={imageUrl}
          className={styles.image}
          alt="foundation-logo"
        />
      )
    })}
  </div>
)

export default ImageRow
