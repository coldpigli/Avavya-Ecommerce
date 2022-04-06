import { Link, useNavigate } from "react-router-dom";
import { useAuth, useProducts } from "../contexts";
import { addToCart, addToWishlist, checkLogin, removeFromWishlist } from "../utils";
import CartButton from "./CartButton";

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

    const checkIteminWishlist = (product) => {
        return wishList.find((item)=>item._id===product._id)
    }

    const handleWishlist = (product) => {
        if(checkLogin(isLoggedIn)){
            checkIteminWishlist(product)
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
                    <div className={`favourite ${checkIteminWishlist(product)?"liked":""}`} onClick={()=>handleWishlist(product)}>
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
                        <CartButton clickListener={()=>navigate("/cart")} icon="shopping_bag"/> 
                        :
                        <CartButton clickListener={()=>handleCart(product)} icon="add"/>
                    }
                        
                    </div>
                </div>
            </div>
  )
}

export default ProductItem