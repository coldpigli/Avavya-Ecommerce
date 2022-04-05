import React from 'react';

const TotalBill = ({cartList}) => {

    const convenienceFee = 140;
    const subTotal = cartList.reduce((acc,curr)=>{
        return acc+curr.qty*curr.price;
    },0)
    const taxes = subTotal/10;

  return (
    <div class="cart-total-info flex-vertical">
        <h2 class="heading2 gap-d20">Total Bill</h2>
               <div class="discount-coupon w-100 gap-d20">
                    <p class="gap-d10">Promotions</p>
                    <div class="discount-cta flex">
                        <div class="input-wrapper gap-d20">
                            <input class="input-box" type="text" placeholder="Enter your code"/>
                        </div>
                        <a href="#"><span class="add-to-bag material-icons md-24">add</span></a>
                    </div>
               </div>
               <div class="total-prices flex-vertical">
                    <div class="subtotal children-centered">
                        <p class="paragraph1">Subtotal</p>
                        <h2 class="heading3">{subTotal}</h2>
                    </div>
                    <div class="delivery-charges children-centered">
                        <p class="paragraph2">Taxes and GST</p>
                        <p class="paragraph2">{taxes}</p>
                    </div>
                    <div class="convenience-charges children-centered">
                        <p class="paragraph2">Convinience Fee</p>
                        <p class="paragraph2">{convenienceFee}</p>
                    </div>
                    <div class="total children-centered gap-u30">
                        <h2 class="heading2">Grand Total</h2>
                        <h2 class="heading2">{subTotal+taxes+convenienceFee}</h2>
                    </div>
                    <div class="checkout gap-u30">
                        <button class="btn btn-primary">
                            <span class="material-icons md-24">shopping_cart_checkout</span>
                            Proceed to Checkout
                        </button>
                    </div>
               </div>
    </div>
  )
}

export default TotalBill