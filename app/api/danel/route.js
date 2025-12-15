import { NextResponse } from "next/server";

//BASE DE DATOS FALSA
const db = [
    {id: 1, nombre: "danel", edad: 16, cargo: "fullstack"}
]


//FUNCION GET
export async function GET(request){
    try{
        return NextResponse.json({users: db}, {status: 200});
    }
    catch(e){
        console.error("a ocurrido un error en el servidor");
        return NextResponse.json({message: "a ocurrido un error en el server"}, {status: 500});
    }
}



//FUNCION POST
export async function POST(request){
    try{
        //PETICION DEL USUARIO
        const userPeticion = await request.json();
        
        if(!userPeticion){
            return NextResponse.json({message: "faltan datos en el cuerpo de la peticion"},{status: 400});
        }
        if(!userPeticion.id || !userPeticion.nombre || !userPeticion.edad || !userPeticion.cargo){
            return NextResponse.json({message: "faltan datos requeridos en el usuario a agregar"},{status: 400});
        }
        
        db.push(userPeticion);
        return NextResponse.json({message: "user agregado correctamente", users: db},{status: 201});
    
    }
    catch(e){
        console.log(e.message||"error en el servidor");
        return NextResponse.json({message:"error interno del servidor"},{status:500});
    }
}


export async function PUT(request){
    try{

        //PETICION DEL USUARIO
        const userPeticion = await request.json();
        
        if(!userPeticion){
            return NextResponse.json({message: "faltan datos en el cuerpo de la peticion"},{status: 400});
        }
        else if(!userPeticion.ID){
            return NextResponse.json({message: "¡Falta el ID del elemento a cambiar !"},{status: 400});
        }
        else if(!userPeticion.Changes){
            return NextResponse.json({message: "¡Faltan los cambios para el ID selecionado"},{status: 400});
        }
        else if(!userPeticion.Changes.id){
            return NextResponse.json({message: "ingresa el nuevo ID"},{status: 400});
        }
        else if(!userPeticion.Changes.nombre){
            return NextResponse.json({message: "ingresa el nuevo nombre"},{status: 400});
        }
        else if(!userPeticion.Changes.edad){
            return NextResponse.json({message: "ingresa la nueva edad"},{status: 400});
        }
        else if(!userPeticion.Changes.cargo){
            return NextResponse.json({message: "ingresa el nuevo cargo"},{status: 400});
        }
        
        //buscando objeto en la base de datos
        const userEdit  = db.findIndex(user => user.id == userPeticion.ID);
        
        if(userEdit == -1){
            return NextResponse.json({message: `el usuario con el ID ${userPeticion.ID} no existe`},{status: 400});
        }
        
        //cambiando datos en la base de datos
        db[userEdit].id = userPeticion.Changes.id;
        db[userEdit].nombre = userPeticion.Changes.nombre;
        db[userEdit].edad = userPeticion.Changes.edad;
        db[userEdit].cargo = userPeticion.Changes.cargo;
        
        return NextResponse.json({message: "usuario actualizado correctamente", users: db},{status:200});
        
    }
    catch(e){
        console.error(e);
        return NextResponse.json({message: "error en el servidor al editar un usuario"},{status:500});
    }
}

//METODO DELETE

export async function DELETE(request) {
    try{
        //PETICION DEL USUARIO
        const userPeticion = await request.json();
        if(!userPeticion){
            return NextResponse.json({message: "faltan datos en el cuerpo de la peticion"},{status:400});
        }
        
        if(!userPeticion.ID){
            return NextResponse.json({message: "ingresa un ID para eliminar un elemento"},{status: 400})
        }
        
        const IdDelete = db.findIndex(users => users.id === userPeticion.ID);
        
        if(IdDelete == -1){
            return NextResponse.json({message: "el ID no existe en la base de datos"},{status:400});
        }
        //ELIMINANDO ELEMENTO DE LA BASE DE DATOS
        db.splice(IdDelete, 1);
        
        return NextResponse.json({message: "elemento eliminado correctamente", users: db},{status: 200});
        
        
    }
    catch(e){
        console.error(e);
        return NextResponse.json({message: "error del servidor al eliminar a un usuario"},{status:500})
    }
}