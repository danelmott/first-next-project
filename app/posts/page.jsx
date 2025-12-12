"use client";

import { useRouter } from "next/navigation";
import { useState} from "react";
import styles from "@/_style/PostSearch.module.css";

function createRandomNumber(){
    const number = Math.random()*2;
    return number

}

export default function PostsSearch(){
    const [ID, setID] = useState("");
    const router = useRouter();
    const [number, setNumber] = useState(null);

    //FUNCION PARA REDIRECCIONAR PAGINA
function handlerSubmit(e){
        e.preventDefault();
        router.push(`/posts/${ID}`);
        const number = createRandomNumber();
        setNumber(number)
    }



    // FUNCTION PARA IR A TEST (lo dejaremos igual)
    function handlerTest(){
        router.push("/test");
    }

    //FUNCTION PARA IR A TEST
    function handlerTest(){
        router.push("/test");
    }

    //si hasError es verdadera se carga un error 
    if(number > 1){
        throw new Error("error al cargar forzado")
    }
    
    return(
        <div className={styles.container}>
        <form className={styles.form} onSubmit={handlerSubmit}>
            <h2 className={styles.title}>Ingresa el ID del elemento</h2>
            <input type="number" placeholder="Ingresa el ID" value={ID} onChange={e => setID(e.target.value)} className={styles.input} />
            <button type="submit" className={styles.submit}>Ingresar</button>
        </form>
        <button onClick={handlerTest}>ir a test</button>
        </div>
    )
}