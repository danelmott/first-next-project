
import { notFound } from "next/navigation"



export default function Page(){

    async function mostrarNumero(formData){
        "use server"
        const number = Number(formData.get("numero"))
        if(number === 5){
            notFound()
        }
    }

    return(
        <form action={mostrarNumero}>
            <input type="number" name="numero"/>
            <button type="submit">ingresa tu numero</button>
        </form>
    );

}