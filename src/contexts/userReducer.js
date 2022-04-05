const userReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN_USER":
            const {firstName, cart, wishlist} = action.payload
            return{
                ...state,
                isLoggedIn: true,
                firstName: firstName,
                cartList: cart,
                wishList: wishlist
            }
        case "LOGOUT_USER":
            return{
                isLoggedIn: false,
                firstName: "",
                cartList: [],
                wishList: []
            }
        case "UPDATE_CART":
            return {...state, cartList: action.payload}
        case "UPDATE_WISHLIST":
            return {...state, wishList: action.payload}
        default:
            break;
    }
}

export default userReducer;