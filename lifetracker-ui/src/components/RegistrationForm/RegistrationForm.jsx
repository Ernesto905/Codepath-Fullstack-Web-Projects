import React from 'react'


//node modules
import { useState } from 'react'

//styling
import "./RegistrationForm.css"


function RegistrationForm() {

  //queries
  const [emailQuery, setEmailQuery] = useState('enter a valid email')
  const [usernameQuery, setUsernameQuery] = useState('your username')
  const [firstNameQuery, setFirtNameQuery] = useState('first name')
  const [lastNameQuery, setlastNameQuery] = useState('last name')
  const [passwordQuery, setPasswordQuery] = useState('Enter a secure password')
  const [passwordConfirmQuery, setpasswordConfirmQuery] = useState('Confirm your password')

  const [form, setForm] = useState({
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
  })

  //handle registration
  function handleRegistration(){

  }

  return (
    <div className='registration-form'>
      <h3>Email</h3>
      <input className='form-input' name='email' type='email' placeholder={emailQuery} onChange={e => setEmailQuery(e.target.value)}></input>

      <h3>User name</h3>
        <input className='form-input' name='username' type='text' placeholder={usernameQuery} onChange={e => setEmailQuery(e.target.value)} ></input>
      
      <div className='user-name'>
        <input className='form-input' name='firstName' type='text' placeholder={firstNameQuery} onChange={e => setfirstNameQuery(e.target.value)}></input>
        <input className='form-input' name='lastName' type='text' placeholder={lastNameQuery} onChange={e => setfirstNameQuery(e.target.validationMessage)}></input>
      </div>

      <h3>Password</h3>
      <input className='form-input' name='password' type='text' placeholder={passwordQuery}></input>

      <h3>Confirm Password</h3>
      <input className='form-input' name='passwordConfirm' type='text' value='Confirm your password'></input>

      <button>Submit</button>

    </div>
  )
}

export default RegistrationForm