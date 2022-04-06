import { createContext, useContext, useReducer } from "react";
import userReducer from "./userReducer";

const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {

    const [userDetails, dispatchUser] = useReducer(userReducer, {
        isLoggedIn: false,
        cartList: [],
        wishList: [],
        firstName: ""
    })

    return <AuthContext.Provider value={{userDetails, dispatchUser}}>
                {children}
            </AuthContext.Provider>
}

export {
    useAuth,
    AuthProvider
}