import { toast } from "../utils"

const filterReducer = (state, action) => {
switch (action.type) {

    case "Max Safety":
        return {...state, maxSafety: !state.maxSafety}

    case "Fast Delivery":
        return {...state, fastDelivery: !state.fastDelivery}

    case "Great Offers":
        return {...state, greatOffers: !state.greatOffers}

    case "Rating 4.0+":
        return {...state, highRating: !state.highRating}

    case "Cost":
        const {sortByCost} = state;
        if(sortByCost.length===0 || sortByCost == "high_to_low"){
            toast({type:"success",message:"Sorting Low to High"})
            return {...state, sortByCost: "low_to_high"}
        }
        else{
            toast({type:"success",message:"Sorting High to Low"})
            return {...state, sortByCost: "high_to_low"}
        }

    case "Categories":
        const {categoryState} = state;
        if(categoryState.includes(action.payload)){
            return {...state, categoryState: categoryState.filter((item)=>(item!==action.payload))}
        }
        else{
            return {...state, categoryState: [...categoryState, action.payload]}
        }

    case "Reset All":
        return {
            maxSafety: false,
            fastDelivery: false,
            greatOffers: false,
            highRating: false,
            sortByCost: '',
            categoryState: []
        }
    default:
        return state;
}
}

export default filterReducer;