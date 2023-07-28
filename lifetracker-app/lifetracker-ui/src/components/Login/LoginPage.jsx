import React from 'react'
import "./LoginPage.css"

//import components
import LoginForm from 'components/LoginForm/LoginForm'

function LoginPage( props ) {

  
  return (
    <div className="login-page">
      <div className="cart">
        <h1 className='login-message'>Login</h1>
        {props.attempt ? <h3>You must be logged in</h3> : null}
        <LoginForm currentUser={props.currentUser} setCurrentUser={props.setCurrentUser} isLoggedIn={props.isLoggedIn} setIsLoggedIn={props.setIsLoggedIn} />
      </div>
    </div>
  )
}



export default LoginPage