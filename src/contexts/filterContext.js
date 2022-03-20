import { useContext,createContext,useReducer } from "react";

const FilterContext = createContext(null);

const useFilter = () => useContext(FilterContext);

const FilterProvider = ({children}) => {

    const [filterState, dispatch] = useReducer(filterReducer, {
        maxSafety: false,
        fastDelivery: false,
        greatOffers: false,
        highRating: false,
        sortByCost: ''
    })

return  <FilterContext.Provider value={{filterState, dispatch}}>
            {children}
        </FilterContext.Provider>
};

export{
    FilterProvider,
    useFilter
}