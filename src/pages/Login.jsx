import { TextField } from "../components"
import { useState } from "react"

const Login = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const {name,value} = e.target;
    setLoginData((prev)=>({...prev, [name]: value}))
  }

  return (
    <section className="login-container flex-vertical children-middle">
    <div className="login-card flex-vertical w-100">
        <h1 className="heading1">Welcome to Avavya</h1>
        <p className="paragraph1 txt-gray gap-d30">Welcome back, please enter your details</p>
        <TextField 
          label="Email" 
          name="email"
          type="email" 
          placeholder="Enter Email"
          value={loginData.email}
          handleChange={handleChange}
          />
        <TextField 
          label="Password" 
          name="password"
          type="password" 
          placeholder="Enter Password"
          value={loginData.password}
          handleChange={handleChange}
        />
        <p className="paragraph2 txt-gray gap-d30"> <a href="#">Forgot Password?</a></p>
        <p className="paragraph2 txt-gray gap-d30"> <a href="../home.html">Sign In as Guest?</a></p>
        <button className="btn btn-primary gap-d20">
            <span className="material-icons md-24 gap-r10">login</span>
                Sign - In
        </button>
        <a href="./signup-page.html" className="btn btn-primary-outline">Don't have an account? Signup</a>
    </div> 
    </section>
  )
}

export default Login