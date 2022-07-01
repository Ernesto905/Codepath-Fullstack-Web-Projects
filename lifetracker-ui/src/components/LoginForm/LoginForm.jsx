import React from 'react'
import "./LoginForm.css"
import axios from 'axios'

//Node modules
import { useState } from 'react'
import { Link } from 'react-router-dom'

function LoginForm( props ) {
  //form state variable
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  //change text
  const handleOnInputChange = (event) => {
    setForm((f) => ({...f, [event.target.name] : event.target.value}))
  }

  //submit and post to backend
  const handleOnSubmit = async () => {

    props.setIsLoggedIn(true)
      
    //set up axios post request
    try {
      const res = await axios.post("http://localhost:3001/auth/login", {
        email: form.email,
        password: form.password,
      }) 
      
    } catch (err) {
      console.log("error: ", err)
    }

  } 


  return (  
    <div className='login-form'>
        <h3>Email 📧</h3>
        <input className='form-input' name="email" type="email" placeholder="user@gmail.com" value={form.email} onChange={handleOnInputChange}></input>
        <h3>Password 🔑</h3>
        <input className='form-input' name="password" type="password" placeholder="password" value={form.password} onChange={handleOnInputChange}></input>
        
        <Link to="/activity"><button className='submit-btn' onClick={handleOnSubmit}> Submit </button></Link>
    </div>
  )
}

export default LoginForm