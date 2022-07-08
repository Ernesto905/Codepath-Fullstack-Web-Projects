import React from 'react'
import "./LoginForm.css"
import axios from 'axios'

//Node modules
import { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import apiClient from '../../services/apiClient'


function LoginForm( props ) {

  const navigate = useNavigate()
  //form state variable
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  const [error, setError] = useState({})



  
   
  
  //change text
  const handleOnInputChange = (event) => {

    //error handling
    if (event.target.name === "email") {

      if(event.target.value.indexOf('@') == -1) {

        setError((err) => ({...err, email: "Please enter a valid email"}))

      } else {

        setError((err) => ({...err, email: null}))

      }
    }

    setForm((f) => ({...f, [event.target.name] : event.target.value}))

  }

  
  const handleOnSubmit = async (event) => {
    event.preventDefault()
    if(!form.password){
      setError((err) => ({...err, password: "Please enter a password."}))
      return 
    }

    const {data, error} = await apiClient.loginUser({email : form.email, password: form.password})

    if(error) {
      setError((err) => ({...err, form: error}))
    }

    if(data?.user){
      props.setCurrentUser(data.user) //TODO: PASS PROP INSIDE 
      apiClient.setToken(data.token)
      props.setIsLoggedIn(true)
      navigate("/activity")
    }


  }


  return (  
    <div className='login-form'>
        
        <h3>Email 📧</h3>
        <input className='form-input' name="email" type="email" placeholder="user@gmail.com" value={form.email} onChange={handleOnInputChange}></input>
        {error.email ? (<p className='error'>{error.email}</p>) : null}
        
        <h3>Password 🔑</h3>
        <input className='form-input' name="password" type="password" placeholder="password" value={form.password} onChange={handleOnInputChange}></input>
        {error.password ? (<p className='error'>{error.password}</p>) : null}
        
        <button className='submit-btn' onClick={handleOnSubmit}> Submit </button>
        {error.form ? (<p className='error'>{error.form}</p>) : null}

    </div>
  )
}

export default LoginForm