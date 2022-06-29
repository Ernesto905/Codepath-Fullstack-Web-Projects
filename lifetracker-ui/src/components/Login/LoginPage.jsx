import React from 'react'
import "./LoginPage.css"

//import components
import LoginForm from 'components/LoginForm/LoginForm'

function LoginPage( props ) {

  
  return (
    <div className="login-page">
      <div className="cart">
        <h1 className='login-message'>Login</h1>
        <LoginForm isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} />
        
      </div>
    </div>
  )
}



export default LoginPage