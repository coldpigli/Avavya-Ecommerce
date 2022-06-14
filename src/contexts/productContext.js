import { createContext, useContext, useState, useEffect } from "react";
import { useAxios } from "../utils";

const ProductContext = createContext(null);

const useProducts = () => useContext(ProductContext);

const ProductProvider = ({children}) => {

    const [allProducts, setAllProducts] = useState([]);
    const {loading, responseData, errorFlag} = useAxios("/api/products");
    useEffect(() => {
        if(!loading && !errorFlag){
             setAllProducts([...responseData.products])
        }       
    }, [loading])


    return <ProductContext.Provider value={{allProducts, setAllProducts, loading, errorFlag}}>
                {children}
            </ProductContext.Provider>
}

export {ProductProvider, useProducts};