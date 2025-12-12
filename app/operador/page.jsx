"use client"
import { useState } from "react"



export default function Operador(){
    const [formData, setFormData] = useState({
        nombre: "Invitado",
        email: null
    })
    

    return(
        <>
        {formData.email?.conctacto && <User/>}
        </>
    );
} 


function User(){
    return(
        <div>
            <h2>hola mundo</h2>
        </div>
    );
}