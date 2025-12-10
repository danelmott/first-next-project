"use client";
import { Children, createContext } from "react";
import { useEffect, useContext, useState } from "react";

const AuthContext = createContext();

//HOOK PERSONALIZADO

export const useAuth = () => {
    return useContext(AuthContext);
} 


//context provider
export function AuthProvider({children}){
    const [isLogged, setIslogged] = useState(false);
    
    //cargar usuario
    useEffect(()=>{
        const saved = localStorage.getItem("logged");
        if(saved === "true"){
            setIslogged(true);
        }
    },[]);

        function login(user){
            setIslogged(true);
            localStorage.setItem("logged","true");
            localStorage.setItem("user",JSON.stringify(user));
        }
        
        function logout(){
            setIslogged(false);
            localStorage.removeItem("logged")
        }
    return(
        <AuthContext.Provider value={{login, logout, isLogged}}>
            {children}
        </AuthContext.Provider>
    );
}