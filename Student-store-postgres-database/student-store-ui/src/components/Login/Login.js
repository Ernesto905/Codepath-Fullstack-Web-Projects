import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import "./Login.css"

export default function Login({ user, setUser }) {
  const navigate = useNavigate()
  const [isProcessing, setIsProcessing] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    email: "",
    password: "",
  })

  useEffect(() => {
    // if user is already logged in,
    // redirect them to the home page
    if (user?.email) {
      navigate("/")
    }
  }, [user, navigate])

  const handleOnInputChange = (event) => {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }))
      } else {
        setErrors((e) => ({ ...e, email: null }))
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async () => {
    setIsProcessing(true)
    setErrors((e) => ({ ...e, form: null }))

    try {
      const res = await axios.post("http://localhost:3001/auth/login", form)
      if (res?.data?.user) {
        setUser(res.data.user)
      } else {
        setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
      }
    } catch (err) {
      console.log(err)
      setErrors((e) => ({ ...e, form: "Invalid username/password combination" }))
    } finally {
      setIsProcessing(false)
    }
  }

  return (
    <div className="Login">
      <div className="card">
        <h2>Login</h2>

        {errors.form && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleOnInputChange} />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleOnInputChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>

          <button className="btn" disabled={isProcessing} onClick={handleOnSubmit}>
            {isProcessing ? "Loading..." : "Login"}
          </button>
        </div>

        <div className="footer">
          <p>
            Don't have an account? Sign up <Link to="/signup">here</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
