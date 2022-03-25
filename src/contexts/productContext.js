import { createContext, useContext } from "react";
import { useAxios } from "../utils";

const ProductContext = createContext(null);

const useProducts = () => useContext(ProductContext);

const ProductProvider = ({children}) => {

    let allProducts=[];
    const {loading, responseData, errorFlag} = useAxios("/api/products");
    if(!loading && !errorFlag){
        allProducts = [...responseData.products]
    }

    return <ProductContext.Provider value={{allProducts, loading, errorFlag}}>
                {children}
            </ProductContext.Provider>
}

export {ProductProvider, useProducts};