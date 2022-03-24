import { TextField } from "../components"
import { useState} from "react";
import axios from "axios";
import { useNavigate } from 'react-router';
import { useAuth } from "../contexts";

const Login = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const {isLoggedIn,setIsLoggedIn, userDetails, setUserDetails} = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name,value} = e.target;
    setLoginData((prev)=>({...prev, [name]: value}))
  }

  const handleLogin = async(credentials) => {
    try {
      const response = await axios.post("/api/auth/login",credentials);
      if(response.status===200){
      setIsLoggedIn(true);
      const {data} = response;
      const {firstName,cart,wishlist} = data.foundUser;
      setUserDetails({
        cartList: cart,
        wishList: wishlist,
        firstName: firstName
      });
      localStorage.setItem("userToken",data.encodedToken)
      navigate("/products")
    }
      else{
        console.log("Oops login didn't work")
      }
    } catch (error) {
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
        <p className="paragraph2 txt-gray gap-d30"> 
          <a href="#">
            Forgot Password?
          </a>
        </p>
        <p className="paragraph2 txt-gray gap-d30"> 
          <a href="../home.html">
            Login with Test Credentials
          </a>
        </p>
        <button className="btn btn-primary gap-d20" onClick = {()=>handleLogin(loginData)}>
            <span className="material-icons md-24 gap-r10">login</span>
                Sign - In
        </button>
        <a href="./signup-page.html" className="btn btn-primary-outline">Don't have an account? Signup</a>
    </div> 
    </section>
  )
}

export default Login