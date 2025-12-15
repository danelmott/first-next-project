//MIDDLEWARE

import {  NextResponse } from "next/server";

export default function proxy (request){
    const authHeader = request.headers.get("authorization");
    
    //VERIFICANDO EXISTENCIA
    if(!authHeader){
        return NextResponse.json({message: "no autorizadom token faltante"}, {status: 401});
    }
    
    //VERIFICANDO FORMATO
    if(!authHeader.startsWith("Bearer ")){
        return NextResponse.json({message: "formato de autorizacion invalido"}, {status: 401});
    }
    
    //VERFICANDO TOKEN
    const token = authHeader.split(" ")[1];
    
    if(token !== process.env.API_MOTT){
        return NextResponse.json({message: "token invalido"}, {status: 401})
    }
    
    //RESPUESTA CORRECTA
    return NextResponse.next();
}

export const config ={
    matcher: ["/api/:patch"]
}

