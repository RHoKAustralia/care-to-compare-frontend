import React from 'react'

const PaymentOptionsForm = (props) => (
  <form>
    <h2>Payment Options</h2>
    <p>
      Select your preferred payment option
    </p>
    <div>
      <div>
        <input
          id='credit-card-option'
          type='radio'
          name='payment-method'
          value='credit-card'
        />
        <label htmlFor='credit-card-option'>Credit card</label>
      </div>
      <div>
        <input
          id='bank-details-option'
          type='radio'
          name='payment-method'
          value='bank-details'
        />
        <label htmlFor='bank-details-option'>Bank details</label>
        <div>
          <input type='text' placeholder='Cardholder name' />
        </div>
        <div>
          <input type='number' placeholder='Credit card number' />
        </div>
        <div>
          <input type='date' placeholder='Expiry date' />
        </div>
        <div>
          <input type='text' placeholder='CVC' />
        </div>
      </div>
    </div>
  </form>
)

export default PaymentOptionsForm
