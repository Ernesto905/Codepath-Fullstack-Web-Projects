import React from 'react'


//node modules
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

//styling
import "./RegistrationForm.css"
import apiClient from '../../services/apiClient'


function RegistrationForm(props) {

  const navigate = useNavigate();
  //queries
  const [passwordConfirmQuery, setpasswordConfirmQuery] = useState()
  const [error, setError] = useState({})
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    first_name: "",
    last_name: "",
  })


  //change text
  const handleOnInputChange = (event) => {

    if (event.target.name === "email") {

      if (event.target.value.indexOf('@') == -1) {
        setError((err) => ({...err, email: "Please enter a valid email"}))
      } else {
        setError((err) => ({...err, email: null}))
      }
    }

    setForm((f) => ({...f, [event.target.name] : event.target.value}))
  }

  //submit and post to backend
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    if(!form.password){
      setError((err) => ({...err, password: "Please enter a password."}))
      return
    }

    if(form.password !== passwordConfirmQuery) {
      setError((err) => ({...err, passwordConfirm: "Password mismatch"}))
      return
    }

    const {data, error} = await apiClient.signupUser({
      email: form.email,
      username: form.username,
      first_name: form.first_name,
      last_name: form.last_name,
      password: form.password
    })

    if (error) {
      setError((err) => ({...err, form: error}))
    }

    if (data?.user){
      props.setCurrentUser(data.user)
      apiClient.setToken(data.token)
      props.setIsLoggedIn(true)
      navigate("/activity")
    }


    props.setIsLoggedIn(true)
      
    //set up axios post request
    try {
      const res = await axios.post("http://localhost:3001/auth/register", {
        email: form.email,
        username: form.username,
        password: form.password,
        first_name: form.first_name,
        last_name: form.last_name,
      }) 
      
    } catch (err) {
      console.log("error: ", err)
    }

  }

  

  return (
    <div className='registration-form'>
      <h3>Email 📧</h3>
      <input className='form-input' name='email' type='email' value={form.email} placeholder="enter a valid email" onChange={handleOnInputChange}></input>
      {error.email ? (<p className='error'>{error.email}</p>) : null}

      <h3>User name</h3>
      <input className='form-input' name='username' type='text' value={form.username} placeholder='your username' onChange={handleOnInputChange} ></input>

      <div className='user-name'>
        <input className='form-input' name='first_name' type='text' value={form.first_name} placeholder='first name' onChange={handleOnInputChange}></input>
        <input className='form-input' name='last_name' type='text' value={form.last_name} placeholder='last name' onChange={handleOnInputChange}></input>
      </div>

      <h3>Password 🔑</h3>
      <input className='form-input' name='password' type='password' value={form.password} placeholder='Enter a secure password' onChange={handleOnInputChange}></input>
      {error.password ? (<p>{error.password}</p>) : null}

      <h3>Confirm Password</h3>
      <input className='form-input' name='passwordConfirm' type='password' value={passwordConfirmQuery} placeholder='Confirm your password' onChange={e => setpasswordConfirmQuery(e.target.value)}></input>
      {error.passwordConfirm ? (<p className='error'>{error.passwordConfirm}</p>) : null}

      <button className='submit-btn' onClick={handleOnSubmit}>Submit</button>

    </div>
  )
}

export default RegistrationForm