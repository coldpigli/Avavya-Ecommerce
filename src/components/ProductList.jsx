import { Loader } from "../containers";
import ProductItem from "./ProductItem";

const ProductList = ({productList, loading, errorFlag}) => {

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