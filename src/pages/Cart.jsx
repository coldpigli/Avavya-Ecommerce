import { Link } from "react-router-dom";
import { CartItem, TotalBill } from "../components";
import { useAuth } from "../contexts";

const Cart = () => {

 const {isLoggedIn, userDetails} = useAuth();
 const {wishList,cartList} = userDetails;

  return (
    <div>{
      (isLoggedIn)
      ?
      <section class="cart-category-section w-90 flex-vertical">
        <div class="category-header children-centered">
            <h1 class="heading2">Welcome to your Cart</h1>
            <div class="category-cta">
                <Link to="/products" class="btn btn-primary"><span class="material-icons md-24">keyboard_backspace</span>See all</Link>
            </div>
        </div>
        <div class="cart-block w-100 gap-u30">
          <div class="cart-item-list flex-vertical">
              {cartList.length===0?
              <div className="children-middle">
               <h1>Cricket Noises...</h1>
               <h2>Uh-oh! Your cart is Empty</h2>
              </div>  
              :
              cartList.map((item)=><CartItem product={item}/>)
            }
          </div>
          <TotalBill cartList={cartList}/>  
        </div>
      </section> 
      :
      <h1>You need to login to access Cart</h1>
    }
   </div>
  )
}

export default Cart;