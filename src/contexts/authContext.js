import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

const useAuth = () => useContext(AuthContext);

const AuthProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userDetails, setUserDetails] = useState({
        cartList: [],
        wishList: [],
        firstName: ""
    })

    return <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, userDetails, setUserDetails}}>
                {children}
            </AuthContext.Provider>
}

export {
    useAuth,
    AuthProvider
}