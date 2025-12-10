"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "@/_context/authContext";
import { useState } from "react";



export default function Posts(){
    const [ID, setID] = useState("");
    const router = useRouter();
    const {isLogged, logout} = useAuth()
    
    function handlerSubmit(e){
        e.preventDefault();
        router.push(`/posts/${ID}`)
    }

    if(!isLogged){
        router.replace("/");
    }
    
    return(
        <>
        <form onSubmit={handlerSubmit}>
            <h2>ingresa el id del elemento a selecioanr</h2>
            <input type="number" placeholder="ingresa el id" value={ID} onChange={e => setID(e.target.value)} />
            <button type="submit">ingresar</button>
        </form>
        <button onClick={logout}>logout</button>
        </>
    )
}