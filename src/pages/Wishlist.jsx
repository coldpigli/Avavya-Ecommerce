import { Link } from "react-router-dom";
import { WishlistItem } from "../components";
import BreadCrumb from "../containers/BreadCrumb";
import { useAuth } from "../contexts";

const Wishlist = () => {

  const {isLoggedIn, userDetails} = useAuth();
  const {wishList,cartList} = userDetails;
  return (
    <div className="wishlist-page">{
      (isLoggedIn)
      ?
      <div>
        <BreadCrumb path="Wishlist"/>
        <div className="category-header children-centered gap-d30">
            <h1 className="heading2">{userDetails.firstName}'s Wishlist</h1>
            <div className="category-cta">
              {userDetails.wishList.length} items in Wishlist
            </div>
        </div>
        <div className='popular-item children-middle wrap'>
        { (wishList.length===0)?
        <div>
          <h1>Cricket Noises...</h1>
        </div>
        :
        wishList.map((product)=>{
          return <WishlistItem product={product}/>
        })
        }
      </div>
      </div>
      :
      <div className="children-middle wrap">
        <h1 className="txt-center gap-r30">You need to login to access Wishlist</h1>
        <div>
          <Link to="/login" className="btn btn-primary">Go To Login</Link>
        </div>
      </div> 
    }
   </div>
  )
}

export default Wishlist;