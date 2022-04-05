import { TextField } from "../components"
import { useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router';
import { useAuth } from "../contexts";
import { Link } from "react-router-dom";
import toast from "../utils/toast";

const Login = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const [loginErrorMsg, setLoginErrorMsg] = useState("");
  const {dispatchUser} = useAuth();
  const navigate = useNavigate();
  const testCredentials = {
    email: "piyushdas98@gmail.com",
    password: "Piyush@123"
  }

  const handleChange = (e) => {
    const {name,value} = e.target;
    setLoginData((prev)=>({...prev, [name]: value}))
  }

  const handleLogin = async(credentials) => {
    try {
      const response = await axios.post("/api/auth/login",credentials);
      if(response.status===200 || response.status===201){
      setLoginErrorMsg("");
      const {data} = response;
      const {foundUser} = data;
      dispatchUser({type:"LOGIN_USER", payload: foundUser})
      localStorage.setItem("userToken",data.encodedToken)
      toast({type:"success", message:"Logged in successfully"})
      navigate("/products");
    }
      else{
        if(response.status===404)
        toast({type:"error", message:"Login Failed"})
        setLoginErrorMsg("Oops! That didn't work. Check your credentials");
      }
    } catch (error) {
      setLoginErrorMsg("Oops! That didn't work. Check your credentials")
      toast({type:"error", message:"Sorry couldn't sign you in"})
      console.log("We couldn't sign you in", error);
    }
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

        {loginErrorMsg &&  <p className="error-msg paragraph2 txt-gray gap-d30"> {loginErrorMsg}</p>}
       
        <p className="paragraph2 txt-gray gap-d30 cursor-point" onClick={()=>handleLogin(testCredentials )}> 
            Login with Test Credentials
        </p>
        <button className="btn btn-primary gap-d20" onClick = {()=>handleLogin(loginData)}>
            <span className="material-icons md-24 gap-r10">login</span>
                Sign - In
        </button>
        <Link to="/signup" className="btn btn-primary-outline">Don't have an account? Signup</Link>
    </div> 
    </section>
  )
}

export default Login