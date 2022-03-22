import { useContext,createContext,useReducer } from "react";
import filterReducer from "./filterReducer";


const FilterContext = createContext(null);

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({children}) => {

    const [filterState, filterDispatch] = useReducer(filterReducer, {
        maxSafety: false,
        fastDelivery: false,
        greatOffers: false,
        highRating: false,
        sortByCost: '',
        category: []
    })

return  <FilterContext.Provider value={{filterState, filterDispatch}}>
            {children}
        </FilterContext.Provider>
};

export{
    FilterProvider,
    useFilter
}