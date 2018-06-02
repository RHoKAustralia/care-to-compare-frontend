import React from 'react'
import Container from 'components/Container'

import styles from './styles.css'

const About = () => (
  <div>
    <Container>
      <h1 className={styles.heading}>About Care to Compare</h1>
      <p>
        Care to Compare will help you find a health insurance policy that is
        right for you so you can buy with confidence.
      </p>
      <ul>
        <li>We like to keep things simple</li>
        <ul>
          <li>We only compare health insurance</li>
        </ul>
        <li>You won’t pay more</li>
        <ul>
          <li>
            We don’t mark up the price of the products you find through Care to
            Compare. That means it is the same price as buying direct
          </li>
        </ul>
        <li>We like to give back 100% of our profits</li>
        <ul>
          <li>
            100% of our profits go back to supporting our charity partners
          </li>
        </ul>
      </ul>
      <h2 className={styles.heading}>How we make money</h2>
      <p>
        We like to be transparent with how we make money. When you buy your
        health insurance policy through CARE TO COMPARE we receive a commission
        from the health insurance provider.
      </p>
      <h2 className={styles.heading}>How does it work?</h2>
      <p>
        In simple terms, you tell us what you’re looking for and we match it
        against the policies available from our health insurance partners.
      </p>
      <h2 className={styles.heading}>Who we work with</h2>
      <p>We compare policies from the following health insurance providers:</p>
      <ul>
        <li>Provider A</li>
        <li>Provider B</li>
      </ul>
      <h2 className={styles.heading}>Your privacy is important to us</h2>
      <p>
        We take your privacy seriously. Please see our{' '}
        <a href="https://caretocompare.com.au/privacy-policy">Privacy Policy</a>.
      </p>
    </Container>
  </div>
)

export default About
