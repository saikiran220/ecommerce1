import { createContext, useContext, useState } from "react";


const AuthContext=createContext();

export const AuthProvider=({children})=>{

    const initialLogedInpage=!!localStorage.getItem("token")
    const[authenticated,setAuthenticated]=useState(initialLogedInpage)

    // const[user,setUser]=useState('')

    const login=(loginvalues)=>{
        console.log(loginvalues)
        localStorage.setItem("token","userdetails")
        setAuthenticated(true)
    }

    const logout=()=>{
        localStorage.removeItem("token")
        setAuthenticated(false)
    }
    return(
        <AuthContext.Provider value={{login,logout,authenticated}}>
           {children}
        </AuthContext.Provider>
    )
}

export const useAuth=()=>useContext(AuthContext)