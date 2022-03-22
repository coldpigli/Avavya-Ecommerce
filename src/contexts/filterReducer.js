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
            return {...state, sortByCost: "low_to_high"}
        }
        else{
            return {...state, sortByCost: "high_to_low"}
        }
    case "Reset All":
        return {
            maxSafety: false,
            fastDelivery: false,
            greatOffers: false,
            highRating: false,
            sortByCost: '',
            category: []
        }
    default:
        return state;
}
}

export default filterReducer;