import React from 'react'

import strokeFoundationBanner from 'assets/stroke-foundation-banner.jpeg'
import styles from './styles.css'

const CharityBanner = () => (
  <div>
    <img
      className={styles.bannerImage}
      src={strokeFoundationBanner}
      alt="Stroke Foundation banner"
    />
  </div>
)

export default CharityBanner
