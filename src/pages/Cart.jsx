import axios from "axios";
import { useEffect } from "react";

const Cart = () => {

  useEffect(()=>{
    axios.post("/api/auth/signup",{
      firstName: "abcd",
      lastName: "defgh",
      email: "iamdiscodancer@fgamil.com",
      password: "mithunda"
    }).then((res)=>console.log(res)).catch((err)=>console.log(err));
  },[])

  return (
    <div>This is the Cart Page</div>
  )
}

export default Cart;