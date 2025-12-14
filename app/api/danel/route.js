
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


const db = [
    {id: 1, nombre: "danel", edad: 16, cargo: "fullstack"}
]


//FUNCION GET
export async function GET(){
    try{
        return NextResponse.json({status:200, users: db})
    }
    catch(e){
        console.error("a ocurrido un error en el servidor");
        return NextResponse.json({status: 500, message: "a ocurrido un error en el server"})
    }
}



//FUNCION POST
export async function POST(request){
    let userPeticion;
    try{
        userPeticion = await request.json();
        
        if(!userPeticion){
            return NextResponse.json({status: 400, message: "faltan datos en el cuerpo de la peticion"})
        }
        if(!userPeticion.id || !userPeticion.nombre || !userPeticion.edad || !userPeticion.cargo){
            return NextResponse.json({status: 400, message: "faltan datos requeridos en el usuario a agregar"})
        }
        
        db.push(userPeticion);
        return NextResponse.json({status: 200, message: "user agregado correctamente", users: db});
    
    }
    catch(e){
        console.log(e.message||"error en el servidor");
        return NextResponse.json({status: 500, message:"error interno del servidor"})
    }
}


export async function PUT(request){
    let userPeticion;

    try{
        userPeticion = await request.json();
        
        if(!userPeticion){
            return NextResponse.json({status: 400, message: "faltan datos en el cuerpo de la peticion"});
        }
        else if(!userPeticion.ID){
            return NextResponse.json({status: 400, message: "¡Falta el ID del elemento a cambiar !"});
        }
        else if(!userPeticion.Changes){
            return NextResponse.json({status: 400, message: "¡Faltan los cambios para el ID selecionado"});
        }
        else if(!userPeticion.Changes.id){
            return NextResponse.json({status: 400, message: "ingresa el nuevo ID"});
        }
        else if(!userPeticion.Changes.nombre){
            return NextResponse.json({status: 400, message: "ingresa el nuevo nombre"});
        }
        else if(!userPeticion.Changes.edad){
            return NextResponse.json({status: 400, message: "ingresa la nueva edad"});
        }
        else if(!userPeticion.Changes.cargo){
            return NextResponse.json({status: 400, message: "ingresa el nuevo cargo"})
        }
        
        //buscando objeto en la base de datos
        const userEdit  = db.findIndex(user => user.id == userPeticion.ID);
        
        if(userEdit == -1){
            return NextResponse.json({status: 400, message: `el usuario con el ID ${userPeticion.ID} no existe`})
        }
        
        //cambiando datos en la base de datos
        db[userEdit].id = userPeticion.Changes.id;
        db[userEdit].nombre = userPeticion.Changes.nombre;
        db[userEdit].edad = userPeticion.Changes.edad;
        db[userEdit].cargo = userPeticion.Changes.cargo;
        
        return NextResponse.json({status: 201, message: "usuario actualizado correctamente", users: db})
        
    }
    catch(e){
        console.error(e);
        return NextResponse.json({status: 500, message: "error en el servidor al editar un usuario"})
    }
}

//METODO DELETE

export async function DELETE(request) {
    let userPeticion;
    try{
        userPeticion = await request.json();
        if(!userPeticion){
            return NextResponse.json({status: 400, message: "faltan datos en el cuerpo de la peticion"})
        }
        
        if(!userPeticion.ID){
            return NextResponse.json({state: 400, message: "ingresa un ID para eliminar un elemento"})
        }
        
        const IdDelete = db.findIndex(users => users.id === userPeticion.ID);
        
        if(IdDelete == -1){
            return NextResponse.json({state: 400, message: "el ID no existe en la base de datos"});
        }
        //ELIMINANDO ELEMENTO DE LA BASE DE DATOS
        db.splice(IdDelete, 1);
        
        return NextResponse.json({state: 200, message: "elemento eliminado correctamente", users: db});
        
        
    }
    catch(e){
        console.error(e);
        return NextResponse.json({status: 500, message: "error del servidor al eliminar a un usuario"})
    }
}