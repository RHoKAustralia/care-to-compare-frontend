import React from 'react';
import { Link } from 'react-router-dom';

import Button from 'components/Button';

const SelectedPolicyInformation = props => (
  <div>
    You'll be saving $43.10 per month with your new health insurance policy.
    <div>
      <input id='donate' type='checkbox' />
      <label htmlFor='donate'>I'd like to donate $10 per month to Stroke Foundation</label>
    </div>
    <div>
      <input id='terms-and-conditions' type='checkbox' />
      <label htmlFor='terms-and-conditions'>I have read the Terms & Conditions</label>
    </div>
    <div>
      <input id='privacy' type='checkbox' />
      <label htmlFor='privacy'>I have read the Privacy Statement</label>
    </div>
    <Button type='default'>
      <Link to="/thanks">Buy now</Link>
    </Button>
  </div>
);

export default SelectedPolicyInformation;
