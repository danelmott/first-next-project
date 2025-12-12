import "@/_style/global.css"
import { Feching } from "@/_actions/feching";


export default async  function TestComponent(){
    
    const response = await Feching();
    
    
    return(
        <ul>
            {response.map(user =>{
                return(
                    <li key={user.id}>
                        <p>title: {user.title}</p>
                        <p>body: {user.body}</p>
                    </li>
                )
            })}
        </ul>
    )
}