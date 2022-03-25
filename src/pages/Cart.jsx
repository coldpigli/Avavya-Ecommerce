import { useAuth } from "../contexts";

const Cart = () => {

 const {isLoggedIn, userDetails} = useAuth();

  return (
    <div>{
      (isLoggedIn)
      ?
      <h1>Welcome to your cart {userDetails.firstName}</h1>
      :
      <h1>You need to login to access Cart</h1>
    }
   </div>
  )
}

export default Cart;