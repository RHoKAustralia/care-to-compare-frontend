import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';

import { Button } from '../../components'
import './Thanks.css'

class Thanks extends Component {
  render() {
    return (
      <div>
        <div className='thanks-header'>
          <p>Thanks Jack</p>
          <p>Buying health insurance through Care to Compare? is good for you and good for charity</p>
        </div>
        <div className='row'>
          <div className='col s6'>
            <h2>Your health insurance</h2>
            <ul>
              <li>Smart combination</li>
              <li>$279.05 per month</li>
              <li>Hospital and extras cover</li>
            </ul>
          </div>
          <div className='col s6'>
            <h2>Your charity</h2>
            You'll be saving $43.10 per month with your new health insurance policy
            and supporting the Stroke Foundation with an extra $10 per month
          </div>
        </div>
        <div>
          <h2>Jane Survivor Story</h2>
          <p>
            My name is Jane and I am 43 years old, happy married and mum to
            two 18 and 20 year old boys. I'm fit and healthy.
            Normal blood pressure. Normal BMI. 12 weeks ago today, I woke up with
            pins and needles in my right arm and leg. I'm a midwife and had worked
            night shift the previous night, so I thought I'd slept really well
            for once and hadn't moved much overnight (I'm usually a restless sleeper)...
          </p>
          <Button type='default'>Read more</Button>
        </div>
        <div className='share-info'>
          <h2>Keep up the great work.</h2>
          <p>Let your friends and family know about Care to Compare? Share on</p>
          <Button type='secondary'>
            <SocialIcon url="#" network="facebook" color="#363f48" style={{ height:30, width:30 }}/> Facebook
          </Button>
          <Button type='secondary'>
            <SocialIcon url="#" network="twitter" color="#363f48" style={{ height:30, width:30 }}/> Twitter
          </Button>
          <Button type='secondary'>
            <SocialIcon url="#" network="instagram" color="#363f48" style={{ height:30, width:30 }}/> Instagram
          </Button>
          <Button type='secondary'>
            <SocialIcon url="#" network="email" color="#363f48" style={{ height:30, width:30 }}/> Email
          </Button>
        </div>
      </div>
    );
  }
}

export default Thanks;
