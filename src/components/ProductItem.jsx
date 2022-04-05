import { Link, useNavigate } from "react-router-dom";
import { useAuth, useProducts } from "../contexts";
import { addToCart, addToWishlist, checkLogin, removeFromWishlist } from "../utils";

const ProductItem = ({product}) => {

    const {imageUrl,title,quantity,price,rating} = product;
    const {userDetails,dispatchUser} = useAuth();
    const {isLoggedIn,wishList,cartList} = userDetails;
    const navigate = useNavigate();

    const handleCart=(product)=>{
        if(checkLogin(isLoggedIn)){
            addToCart(product, isLoggedIn, dispatchUser);   
        }
    }

    const handleWishlist = (product) => {
        if(checkLogin(isLoggedIn)){
            wishList.find((item)=>item._id===product._id)
            ?
            removeFromWishlist(product, isLoggedIn, dispatchUser)
            :
            addToWishlist(product, isLoggedIn, dispatchUser);
        }
    }

  return (
    <div className="card vertical-card bod-light">
                <div className="card-image">
                    <Link to="/products">
                        <img src={imageUrl} alt="food"/>
                    </Link>
                    <div className={`favourite ${(wishList.find((item)=>item._id===product._id))?"liked":""}`} onClick={()=>handleWishlist(product)}>
                        <span className="material-icons md-24">
                            favorite
                        </span>
                    </div>
                </div>

                <div className="card-description">
                    <h3 className="heading3">{title}</h3>
                    <div className="card-price-rating">
                        <p>{quantity}</p>
                        <div className="item-rating">
                            ★ {rating}
                        </div>
                    </div>
                </div>

                <div className="cards-cta">
                    <div className="quantity-counter flex">
                    <h2 className="heading3">₹{price}</h2>
                    </div>
                    <div className="quantity-counter flex">
                        {(cartList.find((item)=>item._id===product._id))
                        ?
                        <div onClick={()=>navigate("/cart")}><span className="add-to-bag material-icons md-24">shopping_bag</span></div>
                        :
                        <div onClick={()=>handleCart(product)}><span className="add-to-bag material-icons md-24">add</span></div>
                    }
                        
                    </div>
                </div>
            </div>
  )
}

export default ProductItem