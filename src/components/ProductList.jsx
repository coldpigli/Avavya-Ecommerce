import { Loader } from "../containers";
import { useFilter } from "../contexts";
import { getProducts } from "../utils";
import useAxios from "../utils/useAxios"
import ProductItem from "./ProductItem";

const ProductList = ({productList, loading, errorFlag}) => {

    // let products=[];
    // const {loading, responseData, errorFlag} = useAxios("/api/products");
    // if(!loading && !errorFlag){
    //     products = [...responseData.products]
    // }

    // const {filterState} = useFilter();

    // const filteredProducts = getProducts(filterState, products);
  return (
    <div className='popular-item children-middle wrap'>
        {
            (errorFlag)?
            <p>Oops! Something went wrong</p>
            :
            (loading)?
            <Loader/>
            :
            productList.map((product)=>{
                return <ProductItem product={product} key={product.id}/>
            })
        }
    </div>
  )
}

export default ProductList