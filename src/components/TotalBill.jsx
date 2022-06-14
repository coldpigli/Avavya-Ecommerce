import { razorpayLoadScript, toast } from '../utils';

const TotalBill = ({cartList}) => {

    const subTotal = cartList.reduce((acc,curr)=>{
        return acc+curr.qty*curr.price;
    },0)

    const calculateTaxes = (amount) => {
        return (amount>0) ? amount/10 : 0; 
    }

    const calculateConvenienceFee = (amount) => {
        return (amount>0) ? amount/100: 0;
    }

    const calulateTotalAmount = (amount) => {
        return (amount+calculateTaxes(amount)+calculateConvenienceFee(amount)).toFixed(0)
    }

    const handlePayment = async (totalAmount) => {
        console.log("Payment", totalAmount);
        const res = await razorpayLoadScript(
          "https://checkout.razorpay.com/v1/checkout.js"
        );
    
        if (!res) {
          toast({
            type: "error",
            message: "Failed to initiate payment, please try again.",
          });
        }
    
        const options = {
          key: process.env.REACT_APP_RAZORPAY_KEY,
          amount: totalAmount*100,
          currency: "INR",
          name: "Avavya-Ecommerce",
          description: "Thank you for shopping. Please pay to continue",
          handler: function (response) {
            const order = {
              paymentId: response?.razorpay_payment_id,
              amountPaid: totalAmount,
            };
            console.log("Order placed", order); //todo
          },
          prefill: {
            name: "Piyush Das",
            email: "piyushdas@gmail.com",
            contact: "8617321874",
          },
          theme: {
            color: "#1C7D5E",
          },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
      };
  
      const handlePlaceOrder = (e) => {
        e.preventDefault();
        handlePayment(calulateTotalAmount(subTotal));
      };

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
                        <p class="paragraph2">{calculateTaxes(subTotal)}</p>
                    </div>
                    <div class="convenience-charges children-centered">
                        <p class="paragraph2">Convinience Fee</p>
                        <p class="paragraph2">{calculateConvenienceFee(subTotal)}</p>
                    </div>
                    <div class="total children-centered gap-u30">
                        <h2 class="heading2">Grand Total</h2>
                        <h2 class="heading2">{calulateTotalAmount(subTotal)}</h2>
                    </div>
                    <div class="checkout gap-u30">
                        {
                            subTotal>0 && <button class="btn btn-primary" onClick={(e)=>handlePlaceOrder(e)}>
                            <span class="material-icons md-24">shopping_cart_checkout</span>
                            Proceed to Checkout
                        </button>
                        }
                    </div>
               </div>
    </div>
  )
}

export default TotalBill