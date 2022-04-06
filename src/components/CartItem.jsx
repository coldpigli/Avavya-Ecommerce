import React from 'react'
import { useAuth } from '../contexts';
import { addToWishlist, handleIncrementDecrement, removeFromCart, removeFromWishlist } from '../utils';

const CartItem = ({product}) => {

  const {title,imageUrl, price, quantity, qty} = product;
  const {userDetails, dispatchUser} = useAuth();
  const {isLoggedIn, cartList, wishList} = userDetails;

  const deleteFromCart = (product) => {
      removeFromCart(product, isLoggedIn, dispatchUser);
  }  

  const checkIteminWishlist = (product) => {
    return wishList.find((item)=>item._id===product._id)
}

const handleWishlist = (product) => {
        checkIteminWishlist(product)
        ?
        removeFromWishlist(product, isLoggedIn, dispatchUser)
        :
        addToWishlist(product, isLoggedIn, dispatchUser);
}

  const removeCartItem=(product)=>{
        if(product?.qty < 2){
            removeFromCart(product, isLoggedIn, dispatchUser);
        }
        else{
            handleIncrementDecrement(product, isLoggedIn, dispatchUser, "decrement")
        }
  }

  const addCartItem=(product)=>{
        handleIncrementDecrement(product, isLoggedIn, dispatchUser, "increment")
  }

  return (
            <div class="cart-item w-100 flex">
                <div class="product-img">
                    <img src={imageUrl} alt="food"/>
                </div>
                <div class='cart-meta-desc flex'>
                <div class="product-decription">
                    <h3 class="heading3">{title}</h3>
                    <p class="paragraph2 txt-gray">{quantity}</p>
                </div>
                <div class="card-price">
                    <h3 class="heading3">{price*qty}</h3>
                    <p class="paragraph2 txt-gray">{price} x {qty}</p>
                </div>
                <div class="cards-cta flex">
                    <div class="quantity-counter flex">
                        <div class="counter-button bod-light heading3 children-middle" onClick={()=>removeCartItem(product)}>-</div>
                        <p>{qty}</p>
                        <div class="counter-button bod-light heading3 children-middle" onClick={()=>addCartItem(product)}>+</div>
                    </div>
                    <div className="delete-cart-item" onClick={()=>deleteFromCart(product)}><span class="add-to-bag material-icons md-24">delete</span></div>
                    <div className={`delete-cart-item`} onClick={()=>handleWishlist(product)}><span className={`${checkIteminWishlist(product)?"added-to-wishlist":"add-to-wishlist"} material-icons md-24`}>favorite</span></div>
                </div>
                </div>
            </div>
  )
}

export default CartItem;