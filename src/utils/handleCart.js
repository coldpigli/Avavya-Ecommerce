import axios from "axios";
import checkLogin from "./checkLogin";
import toast from "./toast";

const addToCart = async (product, isLoggedIn, dispatchUser) => {
    if (checkLogin(isLoggedIn)) {
      try {
        const res = await axios.post(
          "/api/user/cart",
          { product: product },
          {
            headers: {
              authorization: localStorage.getItem("userToken"),
            },
          }
        );
        if (res.status === 200 || res.status === 201) {
          const { cart } = res.data;
          toast({ type: "success", message: "Added to Cart" });
          dispatchUser({type: "UPDATE_CART", payload: cart})
        }
      } catch (err) {
        console.log("Something bad happened", err);
        toast({ type: "error", message: "Couldn't complete request" });
      }
    }
  };

  const removeFromCart = async (product, isLoggedIn, dispatchUser) => {
    if (checkLogin(isLoggedIn)) {
      try {
        const res = await axios.delete(`/api/user/cart/${product._id}`, {
          headers: {
            authorization: localStorage.getItem("userToken"),
          },
        });
        if (res.status === 200 || res.status === 201) {
          const { cart } = res.data;
          toast({ type: "success", message: "Removed from Cart" });
          dispatchUser({type: "UPDATE_CART", payload: cart})   
        }
      } catch (err) {
        console.log("oops something bad happened", err);
        toast({ type: "error", message: "Couldn't complete request" });
      }
    }
};

const handleIncrementDecrement = async(product, isLoggedIn, dispatchUser, type) =>{
    if (checkLogin(isLoggedIn)) {
      try {
        const res = await axios.post(`/api/user/cart/${product._id}`,
        {
            action: {
                type: type
            }
        }
        ,{
          headers: {
            authorization: localStorage.getItem("userToken"),
          },
        });
        if (res.status === 200 || res.status === 201) {
          const { cart } = res.data;
          toast({ type: "success", message: "Cart Updated" });
          dispatchUser({type: "UPDATE_CART", payload: cart})   
        }
      } catch (err) {
        console.log("oops something bad happened", err);
        toast({ type: "error", message: "Couldn't complete request" });
      }
    }
}

  export {addToCart, removeFromCart, handleIncrementDecrement};