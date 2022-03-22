const priceLowToHigh = (products, filterState) => {
    const tempArr = [...products]
    return (filterState.sortByCost==="low_to_high")?tempArr.sort((a,b)=>a.price-b.price):[...products]
}

const priceHighToLow = (products, filterState) => {
    const tempArr = [...products]
    return (filterState.sortByCost==="high_to_low")?tempArr.sort((a,b)=>b.price-a.price):[...products]
}

const applyMaxSafety = (products, filterState) => {
    return (filterState.maxSafety)?products.filter((product)=>(product.maxSafety)):[...products]
}

const applyFastDelivery = (products, filterState) => {
    return (filterState.fastDelivery)?products.filter((product)=>(product.fastDelivery)):[...products]
}

const applyGreatOffers = (products, filterState) => {
    return (filterState.greatOffers)?products.filter((product)=>(product.offer)):[...products]
}

const applyHighRating = (products, filterState) => {
    return (filterState.highRating)?products.filter((product)=>(product.rating>4)):[...products]
}

const applyCategories = () =>{
    
}

const composeAllFilters = (filterState,...args) =>(products)=>{
   return args.reduce((acc, curr)=>{
            return curr(acc, filterState);
    },products)
};



const getProducts = (filterState, products) => {
    return composeAllFilters(
        filterState,
        priceLowToHigh,
        priceHighToLow,
        applyMaxSafety,
        applyFastDelivery,
        applyGreatOffers,
        applyHighRating,
    )(products)
}

export {
    getProducts
}