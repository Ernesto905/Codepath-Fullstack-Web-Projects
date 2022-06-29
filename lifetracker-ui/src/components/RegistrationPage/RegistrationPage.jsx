import React from 'react'
import "./RegistrationPage.css"

//import components
import RegistrationForm from 'components/RegistrationForm/RegistrationForm'

function RegistrationPage() {
  return (
    <div className='registration-page'>

      {/* TODO: If user is already logged in, redirect to the activities page */}


      {/* If user is not logged in */}
      <div className='cart'>
        <h1 className='register-message'>Register</h1>
        <RegistrationForm/>
      </div>
      
    </div>

    
    
  )
}

export default RegistrationPage