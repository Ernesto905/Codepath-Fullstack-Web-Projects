import React from 'react'
import "./RegistrationForm.css"

function RegistrationForm() {
  return (
    <div className='registration-form'>
      <h3>Email</h3>
      <input className='form-input' name='email' type='email' value='enter a valid email'></input>

      <h3>User name</h3>
        <input className='form-input' name='username' type='text' value='your username'></input>
      <div className='user-name'>
        <input className='form-input' name='firstName' type='text' value='first name'></input>
        <input className='form-input' name='lastName' type='text' value='last name'></input>
      </div>

      <h3>Password</h3>
      <input className='form-input' name='password' type='text' value='Enter a secure password'></input>

      <h3>Confirm Password</h3>
      <input className='form-input' name='passwordConfirm' type='text' value='Confirm your password'></input>

    </div>
  )
}

export default RegistrationForm