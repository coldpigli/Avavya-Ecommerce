import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth, useProducts} from '../contexts';

const WishlistItem = ({product}) => {

    const {imageUrl,title,quantity,price,rating} = product;
    const {userDetails,setUserDetails} = useAuth();
    const {wishList,cartList} = userDetails;
    const {allProducts, setAllProducts} = useProducts();

    const removeFromWishList = (product) => {
        const temp = wishList.filter((item)=>product._id!==item._id);
        setUserDetails({...userDetails, wishList: temp})
        const temp2 = allProducts.map((item)=>(item._id===product._id)?{...item, isLiked: false}:item)
        setAllProducts(temp2);
    }

  return (
            <div className="card vertical-card bod-light">
                <div className="card-image">
                    <Link to="/products">
                        <img src={imageUrl} alt="food"/>
                    </Link>
                    <div className="dismiss" onClick={()=>removeFromWishList(product)}>
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
                    <div className="quantity-counter flex">
                        {/* ToDo: Will toogle on the basis of count later  */}
                        {/* <div className="counter-button bod-light heading3 children-middle">-</div>
                        <p>2</p>
                        <div className="counter-button bod-light heading3 children-middle">+</div> */}
                        <div><span className="add-to-bag material-icons md-24">add</span></div>
                    </div>
                </div>
            </div>
  )
}

export default WishlistItem