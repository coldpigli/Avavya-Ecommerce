import { useAuth } from "../contexts";

const Wishlist = () => {

  const {isLoggedIn, userDetails} = useAuth();
  return (
    <div>{
      (isLoggedIn)
      ?
      <h1>Welcome to your wishList {userDetails.firstName}</h1>
      :
      <h1>You need to login to access wishList</h1>
    }
   </div>
  )
}

export default Wishlist;