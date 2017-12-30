import React from 'react'
import './styles.css'

const ImageRow = ({ images }) => (
  <div className="image-row">
    {images.map(function(imageUrl, index) {
      return (
        <img key={index} src={imageUrl} alt="foundation-logo" height="50px" />
      )
    })}
  </div>
)

export default ImageRow
