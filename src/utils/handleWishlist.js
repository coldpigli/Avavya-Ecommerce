import axios from "axios";
import checkLogin from "./checkLogin";
import toast from "./toast";

const addToWishlist = async (product, isLoggedIn, dispatchUser) => {
    if (checkLogin(isLoggedIn)) {
      try {
        const res = await axios.post(
          "/api/user/wishlist",
          { product: product },
          {
            headers: {
              authorization: localStorage.getItem("userToken"),
            },
          }
        );
        if (res.status === 200 || res.status === 201) {
          const { wishlist } = res.data;
          toast({ type: "success", message: "Added to Wishlist" });
          dispatchUser({type: "UPDATE_WISHLIST", payload: wishlist})
        }
      } catch (err) {
        console.log("Something bad happened", err);
        toast({ type: "error", message: "Couldn't complete request" });
      }
    }
  };

const removeFromWishlist = async (product, isLoggedIn, dispatchUser) => {
    if (checkLogin(isLoggedIn)) {
      try {
        const res = await axios.delete(`/api/user/wishlist/${product._id}`, {
          headers: {
            authorization: localStorage.getItem("userToken"),
          },
        });
        if (res.status === 200 || res.status === 201) {
          const { wishlist } = res.data;
          toast({ type: "success", message: "Removed from Wishlist" });
          dispatchUser({type: "UPDATE_WISHLIST", payload: wishlist})   
        }
      } catch (err) {
        console.log("oops something bad happed", err);
        toast({ type: "error", message: "Couldn't complete request" });
      }
    }
};

  export {addToWishlist, removeFromWishlist};