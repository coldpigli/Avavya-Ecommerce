import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth, useProducts} from '../contexts';
import { addToCart, checkLogin, handleIncrementDecrement, removeFromWishlist } from '../utils';

const WishlistItem = ({product}) => {

    const {imageUrl,title,quantity,price,rating} = product;
    const {userDetails,dispatchUser} = useAuth();
    const {isLoggedIn, cartList} = userDetails;
    
    const handleWishlist = (product) => {
        if(checkLogin(isLoggedIn)){
            removeFromWishlist(product, isLoggedIn, dispatchUser)
        }
    }

    const handleCart=(product)=>{
        if(cartList.find((item)=>item._id===product._id)){
            handleIncrementDecrement(product, isLoggedIn, dispatchUser, "increment")
        } else{
            addToCart(product, isLoggedIn, dispatchUser)
        }
    }

  return (
            <div className="card vertical-card bod-light">
                <div className="card-image">
                    <Link to="/products">
                        <img src={imageUrl} alt="food"/>
                    </Link>
                    <div className="dismiss" onClick={()=>handleWishlist(product)}>
                        <span className="material-icons md-24">
                            cancel
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
                    <div className="quantity-counter flex" onClick={()=>handleCart(product)}>
                        <button className='btn btn-primary'><span className="add-to-bag material-icons md-24">shopping_cart</span></button>
                    </div>
                </div>
            </div>
  )
}

export default WishlistItem