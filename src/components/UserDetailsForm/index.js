import React from 'react'

const UserDetailsForm = () => (
  <form>
    <h2>Personal Details</h2>
    <div>
      <input type='text' placeholder='First name' />
    </div>
    <div>
      <input type='text' placeholder='Last name' />
    </div>
    <div>
      <input type='text' placeholder='Address 1' />
    </div>
    <div>
      <input type='text' placeholder='Address 2' />
    </div>
    <div>
      <input type='text' placeholder='State' />
    </div>
    <div>
      <input type='number' placeholder='Postcode' />
    </div>
    <div>
      <input type='email' placeholder='Email' />
    </div>
    <div>
      <input type='text' placeholder='Contact Number' />
    </div>
    <div>
      <select></select>
    </div>
    <div>
      <input type='text' placeholder='Current membership number' />
    </div>
    <div>
      <input type='date' placeholder='Policy start date' />
    </div>
  </form>
)

export default UserDetailsForm
