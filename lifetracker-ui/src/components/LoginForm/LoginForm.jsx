import React from 'react'
import "./LoginForm.css"

//Node modules
import { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginForm( props ) {
  
  const [emailQuery, setEmailQuery] = useState('')
  const [passwordQuery, setPasswordQuery] = useState('')

  console.log(props.isLoggedIn)

  return (
    <div className='login-form'>
        {/* TODO: Implement onchange function using state variables */}
        <h3>Email</h3>
        <input className='form-input' name="email" type="email" placeholder="user@gmail.com" value={emailQuery} onChange={e => setEmailQuery(e.target.value)}></input>
        <h3>Password</h3>
        <input className='form-input' name="password" type="text" placeholder="password" value={passwordQuery} onChange={e => setPasswordQuery(e.target.value)}></input>
        
        <Link to="/activity"><button className='btn' onClick={async () => props.setIsLoggedIn(true)}> Submit </button></Link>
    </div>
  )
}

export default LoginForm