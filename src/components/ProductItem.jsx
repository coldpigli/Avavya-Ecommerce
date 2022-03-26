import { Link, useNavigate } from "react-router-dom";
import { useAuth, useProducts } from "../contexts";

const ProductItem = ({product}) => {

    const {imageUrl,isLiked,title,quantity,price,rating} = product;
    const {isLoggedIn, userDetails,setUserDetails} = useAuth();
    const {wishList,cartList} = userDetails;
    const navigate = useNavigate();

    const checkClick=()=>{
        console.log("Add to Cart")
    }

    const {allProducts, setAllProducts} = useProducts();

    const addToWishlist = (product) => {
        if(isLoggedIn){
            (wishList.find((item)=>item._id===product._id))
            ?console.log("Item already exists"):
            setUserDetails({...userDetails, wishList: [...wishList, product]})
            const temp = allProducts.map((item)=>(item._id===product._id)?{...item, isLiked: true}:item)
            setAllProducts(temp);
        }
        else{
        navigate("/login")
        }
    }

  return (
    <div className="card vertical-card bod-light">
                <div className="card-image">
                    <Link to="/products">
                        <img src={imageUrl} alt="food"/>
                    </Link>
                    <div className={`favourite ${product.isLiked?"liked":""}`} onClick={()=>addToWishlist(product)}>
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
                        {/* ToDo: Will toogle on the basis of count later  */}
                        {/* <div className="counter-button bod-light heading3 children-middle">-</div>
                        <p>2</p>
                        <div className="counter-button bod-light heading3 children-middle">+</div> */}
                        <div onClick={checkClick}><span className="add-to-bag material-icons md-24">add</span></div>
                    </div>
                </div>
            </div>
  )
}

export default ProductItem