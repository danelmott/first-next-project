"use client"
import { useState } from "react"
import { Counter } from "@/_actions/counter"

export default function Contador(){
    const [count, setCount] = useState(0);
    
    const handleClick = async () =>{
        try{ 
        const newCount = await Counter(count);
        setCount(newCount);
        }

        catch(e){
            console.log("error al aumentar el contador");
        }
    }
    return(
        <div>
            <h2>contador {count}</h2>
            <button onClick={handleClick}>agregar al contador</button>
        </div>
    )
}