import React, {createContext, useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){
    const UserLocalStorageAuthPersist = localStorage.getItem('user')
    const [user, setUser] = useState(JSON.parse(UserLocalStorageAuthPersist))

    function Login(resp){
        const UserLocalStorage = JSON.stringify(resp)
        localStorage.setItem('user', UserLocalStorage)
        const userLocal = localStorage.getItem('user')
        setUser(JSON.parse(userLocal))
    }

    return(
        <AuthContext.Provider value={{user, setUser, Login}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider