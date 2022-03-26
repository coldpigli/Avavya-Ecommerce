import React from 'react'
import { useAuth } from '../contexts';

const CartItem = ({product}) => {

  const {title,imageUrl, price, quantity, count} = product;
  const {userDetails, setUserDetails} = useAuth();
  const {cartList} = userDetails;

  const deleteFromCart = (product) => {
      const temp = cartList.filter((item)=>item._id!==product._id);
      setUserDetails({...userDetails, cartList: temp});
  }  

  const removeCartItem=(product)=>{
        if(product.count < 2){
            deleteFromCart(product)
        }
        else{
            const temp = cartList.map((item)=>item._id==product._id?{...item, count: item.count-1}:item)
            setUserDetails({...userDetails,cartList: temp});
        }
  }

  const addCartItem=(product)=>{
        const temp = cartList.map((item)=>item._id===product._id?{...item, count: item.count+1}:item)
        setUserDetails({...userDetails,cartList: temp})
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
                    <h3 class="heading3">{price*count}</h3>
                    <p class="paragraph2 txt-gray">{price} x {count}</p>
                </div>
                <div class="cards-cta flex">
                    <div class="quantity-counter flex">
                        <div class="counter-button bod-light heading3 children-middle" onClick={()=>removeCartItem(product)}>-</div>
                        <p>{count}</p>
                        <div class="counter-button bod-light heading3 children-middle" onClick={()=>addCartItem(product)}>+</div>
                    </div>
                    <div className="delete-cart-item" onClick={()=>deleteFromCart(product)}><span class="add-to-bag material-icons md-24">delete</span></div>
                </div>
                </div>
            </div>
  )
}

export default CartItem;