"use client"
import style from "@/_style/image.module.css"
import Image from "next/image";




export default function PageImage(){
    return(
        <div className={style.contenedor}>
            <Image src={"/araque.jpg"} width={400} height={400} className={style.imagen} alt="araque"/>
            <Image src={"/josue.jpg"}  width={400} height={400} className={style.imagen} alt="josue"/>
            <Image src={"/papi chulo.jpg"} width={400} height={400}  className={style.imagen} alt="danel_mott"/>
        </div>
    );
}