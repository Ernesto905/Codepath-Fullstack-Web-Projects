import React from 'react'


//node modules
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

//styling
import "./RegistrationForm.css"


function RegistrationForm(props) {

  //queries
  const [passwordConfirmQuery, setpasswordConfirmQuery] = useState()
  const [form, setForm] = useState({
    email: "",
    username: "",
    password: "",
    first_name: "",
    last_name: "",
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
      <h3>Email</h3>
      <input className='form-input' name='email' type='email' value={form.email} placeholder="enter a valid email" onChange={handleOnInputChange}></input>

      <h3>User name</h3>
        <input className='form-input' name='username' type='text' value={form.username} placeholder='your username' onChange={handleOnInputChange} ></input>
      
      <div className='user-name'>
        <input className='form-input' name='first_name' type='text' value={form.first_name} placeholder='first name' onChange={handleOnInputChange}></input>
        <input className='form-input' name='last_name' type='text' value={form.last_name} placeholder='last name' onChange={handleOnInputChange}></input>
      </div>

      <h3>Password</h3>
      <input className='form-input' name='password' type='text' value={form.password} placeholder='Enter a secure password' onChange={handleOnInputChange}></input>

      <h3>Confirm Password</h3>
      <input className='form-input' name='passwordConfirm' type='text' value={passwordConfirmQuery} placeholder='Confirm your password' onChange={e => setpasswordConfirmQuery(e.target.value)}></input>

      <Link to="/activity"><button onClick={handleOnSubmit}>Submit</button></Link>

    </div>
  )
}

export default RegistrationForm