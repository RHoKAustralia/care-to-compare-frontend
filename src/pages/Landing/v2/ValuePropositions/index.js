import React from 'react'
import Grid, { Col } from 'components/Grid'

import styles from './styles.css'

// TODO: Replace with real content
const ValuePropositions = () => (
  <div>
    <h2 className={styles.subheading}>
      What people have to say about Care to Compare
    </h2>
    <Grid>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <Col s={4} key={`proposition-${index}`}>
            <div className={styles.proposition}>
              <img
                src={`https://source.unsplash.com/random/180x180?${index}`}
                className={styles.photo}
                alt="Customer"
              />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </Col>
        ))}
    </Grid>
  </div>
)

export default ValuePropositions
