import axios from "axios";
import { useState } from "react";
import {TextField} from "../components";

const Signup = () => {

  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })

 const [confirmPass, setConfirmPass] = useState("");
 const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    const {name,value} = e.target;
    setSignupData((prev)=>({...prev, [name]: value}))
  }

  const matchPasswords = (e) => {
    setConfirmPass(e.target.value);
    (e.target.value===signupData.password)?setShowError(false):setShowError(true);
  }

  const handleSignup = async(e) => {
      e.preventDefault();
      const response  = await axios.post("/api/auth/signup", signupData);
      console.log(response);
  }

  return (
    <section className="login-container flex-vertical children-middle">
    <div className="login-card flex-vertical w-100">
        <h1 className="heading1">Welcome to Avavya</h1>
        <p className="paragraph1 txt-gray gap-d30"></p>
        <form>
        <div className="signup-name">
          <TextField 
          label="First Name" 
          name="firstName" 
          type="text"
          placeholder="Enter First Name"
          value={signupData.firstName}
          handleChange={handleChange}
          />
          <TextField 
          label="Last Name" 
          name="lastName"
          type="text" 
          placeholder="Enter Last Name"
          value={signupData.lastName}
          handleChange={handleChange}
          />
        </div>
        <TextField 
          label="Email" 
          name="email"
          type="email" 
          placeholder="Enter Email"
          value={signupData.email}
          handleChange={handleChange}
          />
        <TextField 
          label="Password" 
          name="password"
          type="password" 
          placeholder="Enter Password"
          value={signupData.password}
          handleChange={handleChange}
        />
        <TextField 
          label="Confirm Password" 
          name="Confirm Password"
          type="password" 
          placeholder="Re-enter Password"
          value={confirmPass}
          handleChange={matchPasswords}
        />
        {(showError) ?
        <p className="error-msg paragraph2 gap-d30">Passwords do not match</p>
        :
        null
        }
        <p className="paragraph2 txt-gray gap-d30"> <a href="./login-page.html">Already Have an Account?</a></p>
        <button className="btn btn-primary btn-signup gap-d20" type="submit" onClick={(e)=>handleSignup(e)}>
            <span className="material-icons md-24 gap-r10">login</span>
                Sign - Up
        </button>  
        </form> 
    </div> 
    </section>
  )
}

export default Signup