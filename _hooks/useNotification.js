"use client"
import { useState, useEffect } from "react";

export function useNotification(){
    const [state, setState] = useState(null);
    
    function handlerClickTrue(){
        setState(true);
    }
    function handlerClickFalse(){
        setState(false);
    }
    function handlerClickNull(){
        setState(null);
    }

    useEffect(()=>{
        if(state == null){
            return
        }
        const timer = setTimeout(()=>{
            setState(null);
        },1500);
        
        return () => clearTimeout(timer);
    },[state]);
    
    return{
        state,
        handlerClickFalse,
        handlerClickTrue,
        handlerClickNull
    }
}
